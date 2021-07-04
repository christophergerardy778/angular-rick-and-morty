import {Component, Input, OnInit} from '@angular/core';
import {LocationModel} from "../../../models/location.model";

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {

  @Input()
  location!: LocationModel;

  constructor() { }

  ngOnInit(): void {}
}
