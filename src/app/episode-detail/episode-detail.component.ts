import { Component, OnInit } from '@angular/core';
import {RickAndMortyService} from "../core/services/rick-and-morty.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {EpisodeModel} from "../models/episode.model";
import {CharacterModel} from "../models/character.model";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {

  episode!: EpisodeModel;
  characters!: CharacterModel[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly rickAndMortyService: RickAndMortyService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get("id");

    if (param !== null) {
      this.rickAndMortyService.getEpisode(Number.parseInt(param))
        .pipe(switchMap(data => this.getCharacterObs(data)))
        .subscribe(data => this.characters = data);
    } else {
      this.router.navigate(["/"]);
    }
  }

  getCharacterObs(data: EpisodeModel) {
    this.episode = data;
    return this.rickAndMortyService.getCharactersById(this.getCharactersIds(data.characters));
  }

  getCharactersIds(data: string[]) {
    return data.map(item => item.replace(`${environment.base_url}/character/`, "")).toString();
  }
}
