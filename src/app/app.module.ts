import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from './home/home.component';
import { MaterialModule } from "./material/material.module";
import { CharactersComponent } from './characters/characters.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { EpisodesComponent } from './episodes/episodes.component';
import { LocationsComponent } from './locations/locations.component';
import {MatListModule} from "@angular/material/list";
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    EpisodesComponent,
    LocationsComponent,
    EpisodeDetailComponent
  ],
  imports: [
    CoreModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    InfiniteScrollModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
