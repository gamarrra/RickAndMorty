import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EpisodeApiResponse } from "src/api_respuestas/episodeapiresponse";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  
  constructor(private http: HttpClient) { }


  getEpisodios(page = 1): Observable<EpisodeApiResponse> {

    return this.http.get<EpisodeApiResponse>(`${environment.episodesUrl}/?page=${page}`);

  }
}