import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Episode } from 'src/api_respuestas/episode';
import { CharactersService } from './characters.service';
import { Character } from 'src/api_respuestas/character';
import { CharacterApiResponse } from 'src/api_respuestas/characterapiresponse';

describe('CharactersService', () => {
  let service: CharactersService;
  let id: string = '1';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CharactersService);
  });
  it('Deberia traer información correctamente de id 1', (done: DoneFn) => {
    service.getPersonaje(id).subscribe((personaje: Character) => {
      console.log('La información es ', personaje);
      expect(personaje.id).toEqual(1);
      done();
    });
  });
});
