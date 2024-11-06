export interface ICharacter {
  id: number;
  name: string;
  status: ICharacterStatus;
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: ICharacterLocation;
  location: ICharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ICharacterLocation {
  name: string;
  url: string;
}

export type ICharacterStatus = "Alive" | "Dead" | "unknown"