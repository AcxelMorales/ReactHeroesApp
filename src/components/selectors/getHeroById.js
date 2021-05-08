import { heroes } from '../data/heroes';

export const getHeroeById = (id) => {
  return heroes.filter((h) => h.id === id);
};
