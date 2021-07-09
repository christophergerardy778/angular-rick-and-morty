import { Component, OnInit } from '@angular/core';
import {LocationModel} from "../models/location.model";
import {RickAndMortyService} from "../core/services/rick-and-morty.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {

  page = 0;
  isCompleted = false;
  locations: LocationModel[] = [];

  constructor(private readonly rickAndMortyService: RickAndMortyService) {
    this.getLocations();
  }

  getLocations() {
    if (!this.isCompleted) {
      this.rickAndMortyService.getLocations(++this.page)
        .subscribe(result => {
          if (result.info.pages === this.page) {
            this.isCompleted = true;
            this.locations.push(...result.results);
          } else {
            this.locations.push(...result.results);
          }
        });
    }
  }
}
