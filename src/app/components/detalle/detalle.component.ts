import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/api_respuestas/character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  character: Character;

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.getPersonaje(id);
  }
  
  getPersonaje(id: string): void {
   this.charactersService.getPersonaje(id).subscribe(character => {
     this.character = character;
    });
  }
}
