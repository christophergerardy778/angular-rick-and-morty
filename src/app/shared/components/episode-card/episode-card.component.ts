import {Component, Input} from '@angular/core';
import {EpisodeModel} from "../../../models/episode.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent {

  @Input()
  episode!: EpisodeModel;

  constructor(private readonly router: Router) { }

  async goEpisodeDetail() {
    await this.router.navigate(["/episode", this.episode.id])
  }
}
