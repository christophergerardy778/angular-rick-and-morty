export enum EpisodeSeasons {
  SEASON_1 = "S01",
  SEASON_2 = "S02",
  SEASON_3 = "S03",
  SEASON_4 = "S04",
}

export interface EpisodeModel {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
