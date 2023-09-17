import { atom } from 'jotai';
import { loadable } from 'jotai/utils';

const API = 'https://pokeapi.co/api/v2/pokemon/' as const;

export const queryAtom = atom<number | undefined>(undefined);

const asyncAtom = atom(async (get) => {
  const query = get(queryAtom);

  if (!query) {
    return;
  }

  const data = await fetch(`${API}${query}`).then((res) => res.json());

  return {
    name: data.name || '',
    img: data.sprites?.front_default || '',
  };
});

export const loadableAtom = loadable(asyncAtom);
