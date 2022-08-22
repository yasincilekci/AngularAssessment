export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  created: string;
  status: string;
  type: string;
  location: LocationInfo;
  origin: OriginOnfo;
}

export interface LocationInfo {
  name: string;
}

export interface OriginOnfo {
  name: string;
}
