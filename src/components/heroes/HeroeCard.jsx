import React from 'react';

import { Link } from 'react-router-dom';

export const HeroeCard = ({
  id,
  publisher,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card text-white bg-dark ms-3 mb-3" style={{ maxWidth: 540 }}>
      <div className="card-header bg-primary">{publisher}</div>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`./assets/heroes/${id}.jpg`}
            alt={superhero}
            className="card-img img-fluid"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )}
            <p className="card-text">
              {' '}
              <small className="text-muted">{first_appearance}</small>{' '}
            </p>

            <Link className="btn btn-primary w-100 mt-3" to={`./heroe/${id}`}>
              Mas...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
