import { atom } from 'jotai';

export const countAtom = atom<number>(0);
export const doubleCountAtom = atom<number>((get) => get(countAtom) * 2);
