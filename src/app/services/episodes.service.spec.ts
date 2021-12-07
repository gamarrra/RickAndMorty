import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EpisodesService } from './episodes.service';
import { EpisodeApiResponse } from 'src/api_respuestas/episodeapiresponse';


describe('EpisodesService', () => {
  let service: EpisodesService;
  let page: 1;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(EpisodesService);
  });
  it('Deberia traer información correctamente de episodios info.count', (done: DoneFn) => {
    service.getEpisodios(page).subscribe((personaje: EpisodeApiResponse) => {
      console.log('La información es ', personaje);
      expect(personaje.info.count).toEqual(41);
      done();
    });
  });
});
