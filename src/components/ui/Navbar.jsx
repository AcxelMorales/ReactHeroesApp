import React, { useContext } from 'react';

import { Link, NavLink, useHistory } from 'react-router-dom';

import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
  const { user:{ name }, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: types.logout
    });

    history.replace('/login');
  };

  return (
    <nav className="navbar d-flex navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Associations
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse justify-content-end collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <p className="nav-item nav-link text-info m-0">{name}</p>

          <button
            onClick={handleLogout}
            className="ml-3 nav-item nav-link btn"
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
