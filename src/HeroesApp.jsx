import React, { useReducer } from 'react';

import { AuthContext } from './auth/AuthContext';
import { AppRouter } from './routes/AppRouter';

import { authReducer } from './auth/authReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {
    logged: false
  };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  );
};
