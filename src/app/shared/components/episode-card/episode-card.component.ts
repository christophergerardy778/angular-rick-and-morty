import {Component, Input, OnInit} from '@angular/core';
import {EpisodeModel} from "../../../models/episode.model";

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {

  @Input()
  episode!: EpisodeModel;

  constructor() { }

  ngOnInit(): void {}
}
