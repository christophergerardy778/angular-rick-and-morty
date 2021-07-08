import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CharacterModel} from "../../models/character.model";
import {ApiResponseModel} from "../../models/apiResponse.model";
import {EpisodeModel, EpisodeSeasons} from "../../models/episode.model";
import {LocationModel} from "../../models/location.model";

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) {}

  getCharacters(page: number) {
    return this.http.get<ApiResponseModel<CharacterModel>>(`${environment.base_url}/character/`, {
      params: {
        page
      }
    });
  }

  getCharacter(id: number) {
    return this.http.get(`${environment.base_url}/character/${id}`);
  }

  getEpisodesBySeason(episodeCode: EpisodeSeasons) {
    return this.http.get<ApiResponseModel<EpisodeModel>>(`${environment.base_url}/episode/`, {
      params: { episode: episodeCode }
    });
  }

  getLocations(page: number) {
    return this.http.get<ApiResponseModel<LocationModel>>(`${environment.base_url}/location/`, {
      params: { page }
    });
  }
}
