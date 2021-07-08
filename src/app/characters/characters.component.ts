import { Component } from '@angular/core';
import {RickAndMortyService} from "../core/services/rick-and-morty.service";
import {CharacterModel} from "../models/character.model";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  constructor (
    private readonly RickAndMortyService: RickAndMortyService
  ) {
    this.getCharacters();
  }

  page = 0;
  isCompleted = false;
  characters: CharacterModel[] = [];

  getCharacters() {
    if (!this.isCompleted) {
      this.RickAndMortyService.getCharacters(++this.page)
        .subscribe(response => {
          if (response.info.pages === this.page) {
            this.isCompleted = true;
            this.characters.push(...response.results)
          } else {
            this.characters.push(...response.results)
          }
        });
    }
  }

}
