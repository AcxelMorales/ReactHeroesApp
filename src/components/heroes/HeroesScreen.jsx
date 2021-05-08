import React, { useMemo } from 'react';

import { Redirect, useParams } from 'react-router-dom';

import { getHeroeById } from '../selectors/getHeroById';

export const HeroesScreen = ({ history }) => {
  const { heroeId } = useParams();
  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);

  if (heroe.length === 0) return <Redirect to="/" />;

  const {
    // id,
    publisher,
    superhero,
    alter_ego,
    first_appearance,
    characters,
  } = heroe[0];

  const handleReturn = () => {
    history.length <= 2 ? history.push('/') : history.goBack();
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {' '}
            <strong>Alter ego:</strong> {alter_ego}
          </li>
          <li className="list-group-item">
            {' '}
            <strong>Publisher:</strong> {publisher}
          </li>
          <li className="list-group-item">
            {' '}
            <strong>First appearence:</strong> {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button
          style={{ width: 200 }}
          className="btn btn-primary"
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  );
};
