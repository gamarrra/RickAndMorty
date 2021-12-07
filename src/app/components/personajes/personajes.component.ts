import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterApiResponse } from 'src/api_respuestas/characterapiresponse';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  searchText;
  personajeCall: CharacterApiResponse;
  paginas: number[];
  actPagina = 1;
  filterBy: string = 'all';
  searchTerm = '';
  busqueda = '';

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.fromPage) {
        this.actPagina = Number(params.fromPage);
        if (Number.isNaN(this.actPagina)) {
          this.actPagina = 1;
        }
      }
      if (params.nameSearch) {
        this.searchTerm = params.nameSearch;
      }
      this.getPersonajes(this.actPagina);
    });
  }

  getPersonajes(page = 1): void {
    this.charactersService
      .getPersonajes(page, this.searchTerm)
      .subscribe((characters) => {
        this.personajeCall = characters;
        this.llenarPageArray(characters.info.pages);
        this.actPagina = page;
      });
  }

  llenarPageArray(total: number): void {
    this.paginas = [] as number[];
    for (var contador: number = 1; contador <= total; contador++) {
      this.paginas.push(contador);
    }
  }
}
