import React from 'react';

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.replace('/');
  };

  return (
    <div className="container mt-5">
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
