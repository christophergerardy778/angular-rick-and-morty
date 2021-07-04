import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RickAndMortyService} from "./services/rick-and-morty.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [],
  providers: [RickAndMortyService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
