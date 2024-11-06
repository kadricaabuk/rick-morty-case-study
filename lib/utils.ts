import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ICharacter } from "./interface/character";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface IResponse {
  results: ICharacter[];
  info: { count: number; pages: number; next: string; prev: string };
}

export const getCharacters = async (filters?: {
  name?: string;
  status?: string;
  type?: string;
  gender?: string;
}) => {
  const { name = "", status = "", type = "", gender = "" } = filters || {};

  console.log(`https://rickandmortyapi.com/api/character?name=${name}&status=${status}&gender=${gender}&type=${type}`)

  const response = await fetch(
    `https://rickandmortyapi.com/api/character?name=${name}&status=${status}&gender=${gender}&type=${type}`
  );
  const res = await response.json();
  return res as IResponse
};
