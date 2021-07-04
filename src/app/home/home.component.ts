import {Component, OnInit} from '@angular/core';
import {RickAndMortyService} from "../core/services/rick-and-morty.service";
import {CharacterModel} from "../models/character.model";
import {ApiResponseModel} from "../models/apiResponse.model";
import {EpisodeModel, EpisodeSeasons} from "../models/episode.model";
import {map} from "rxjs/operators";
import {LocationModel} from "../models/location.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  episodes: EpisodeModel[] = [];
  characters: CharacterModel[] = [];
  locations: LocationModel[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters(1)
      .pipe(map(response => response.results.slice(0, 4)))
      .subscribe(data => this.characters = data);

    this.rickAndMortyService.getEpisodesBySeason(EpisodeSeasons.SEASON_1)
      .pipe(map(data => data.results.slice(0, 4)))
      .subscribe(data => this.episodes = data);

    this.rickAndMortyService.getLocations(1)
      .pipe(map(data => data.results.slice(0, 4)))
      .subscribe(data => this.locations = data);
  }
}
