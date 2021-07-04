import {Component, Input, OnInit} from '@angular/core';
import {CharacterModel} from "../../../models/character.model";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input()
  character!: CharacterModel;

  constructor() { }

  ngOnInit(): void {}
}
