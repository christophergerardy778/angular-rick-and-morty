import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from "../material/material.module";
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from "@angular/router";
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';
import { LocationCardComponent } from './components/location-card/location-card.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    CharacterCardComponent,
    EpisodeCardComponent,
    LocationCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    CharacterCardComponent,
    EpisodeCardComponent,
    LocationCardComponent
  ]
})
export class SharedModule { }
