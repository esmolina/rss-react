export interface Coords {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Coords;
  location: Coords;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export interface APICharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: number;
  };
  results: Character[];
}

export interface CartoonCardProps {
  character: Character;
}
