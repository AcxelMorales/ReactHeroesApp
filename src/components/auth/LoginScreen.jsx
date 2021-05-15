import React, { useContext } from 'react';

import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

    dispatch({
      type: types.login,
      payload: {
        name: 'Acxel'
      }
    });

    history.replace(lastPath);
  };

  return (
    <div className="container mt-5 animate__animated animate__fadeIn">
      <h1>Login</h1>
      <hr />

      <div className="d-grid gap-2">
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
