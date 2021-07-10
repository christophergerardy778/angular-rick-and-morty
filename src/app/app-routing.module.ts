import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CharactersComponent } from "./characters/characters.component";
import { EpisodesComponent } from "./episodes/episodes.component";
import { LocationsComponent } from "./locations/locations.component";
import {EpisodeDetailComponent} from "./episode-detail/episode-detail.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'episodes',
    component: EpisodesComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'episode/:id',
    component: EpisodeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
