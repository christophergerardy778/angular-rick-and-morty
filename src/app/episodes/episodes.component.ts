import {Component} from '@angular/core';
import {RickAndMortyService} from "../core/services/rick-and-morty.service";
import {EpisodeModel, EpisodeSeasons} from "../models/episode.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {

  seasonOne$!: Observable<EpisodeModel[]>;
  seasonTwo$!: Observable<EpisodeModel[]>;
  seasonThree$!: Observable<EpisodeModel[]>;
  seasonFour$!: Observable<EpisodeModel[]>;

  constructor(private readonly rickAndMortyService: RickAndMortyService) {
    this.seasonOne$ = this.getObservableBySeason(EpisodeSeasons.SEASON_1);
    this.seasonTwo$ = this.getObservableBySeason(EpisodeSeasons.SEASON_2);
    this.seasonThree$ = this.getObservableBySeason(EpisodeSeasons.SEASON_3);
    this.seasonFour$ = this.getObservableBySeason(EpisodeSeasons.SEASON_4);
  }

  getObservableBySeason(season: EpisodeSeasons) {
    return this.rickAndMortyService.getEpisodesBySeason(season)
      .pipe(map(response => response.results));
  }
}
