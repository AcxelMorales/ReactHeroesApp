import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { HeroeCard } from '../heroes/HeroeCard';

import { getHeroesByName } from '../selectors/getHeroesByName';

import { useForm } from '../../hooks/useForm';

export const SearchScreen = ({ history }) => {
  const { search } = useLocation();
  const { q = '' } = queryString.parse(search);

  const [{ word }, handleInputChange, reset] = useForm({
    word: q,
  });

  const handleSubmit = (evt) => {
    reset();
    evt.preventDefault();
    history.push(`?q=${word}`);
  };

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  return (
    <div className="animate__animated animate__fadeIn">
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col 5">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="word"
              placeholder="Find your hero"
              autoComplete="off"
              onChange={handleInputChange}
              value={word}
            />
            <button
              type="submit"
              className="mt-3 btn btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          {q === '' && (
            <div className="alert alert-warning text-center animate__animated animate__fadeIn">
              Search a Hero
            </div>
          )}

          {q !== '' && heroesFiltered.length === 0 && (
            <div className="alert alert-danger text-center animate__animated animate__fadeIn">
              There is no a hero with {q}
            </div>
          )}

          {heroesFiltered.map((heroe) => (
            <HeroeCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </div>
  );
};
