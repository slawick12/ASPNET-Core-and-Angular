import { Photo } from "./photo";

export interface User {
  id: number;
  username: string;
  knowAs: string;
  age: number;
  gender: string;
  created: Date;
  photoUrl: string;
  country: string;
  interest?: string;
  introduction?: string;
  lokingFor?: string;
  photos?: Photo[];
}

