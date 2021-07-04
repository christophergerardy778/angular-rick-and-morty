import {LocationModel} from "./location.model";

export interface CharacterModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: LocationModel;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
