import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { Character } from "src/api_respuestas/character";
import { CharacterApiResponse } from "src/api_respuestas/characterapiresponse";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getPersonajes(page = 1, term = ''): Observable<CharacterApiResponse> {
    return this.http.get<CharacterApiResponse>(
      `${environment.charactersUrl}/?page=${page}${
        term === '' ? '' : '&name=' + term
      }`
    );
  }
  getPersonaje(id: string): Observable<Character> {
    return this.http.get<Character>(`${environment.charactersUrl}/${id}`);
  }

}