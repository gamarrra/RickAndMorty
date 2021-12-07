import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { EpisodeApiResponse } from 'src/api_respuestas/episodeapiresponse';
import { EpisodesService } from 'src/app/services/episodes.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css'],
})
export class EpisodiosComponent implements OnInit {
  episodioCall: EpisodeApiResponse;
  reverse: boolean = false;
  paginas: number[];
  actualPagina = 1;
  order: string = 'name';
  sortedCollection: any[];

  constructor(
    private episodesService: EpisodesService,
    private orderPipe: OrderPipe
  ) {
    this.sortedCollection = orderPipe.transform(this.episodioCall, 'info.name');
  }

  ngOnInit() {
    this.getEpisodios();
  }

  llenarPagArray(total: number): void {
    this.paginas = [] as number[];

    for (var counter: number = 1; counter <= total; counter++) {
      this.paginas.push(counter);
    }
  }

  getEpisodios(page = 1): void {
    this.episodesService.getEpisodios(page).subscribe((episodes) => {
      this.episodioCall = episodes;
      this.llenarPagArray(episodes.info.pages);
      this.actualPagina = page;
    });
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}
