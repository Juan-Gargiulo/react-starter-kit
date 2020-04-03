import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { isAuthenticated } from 'js/routes/helpers/PrivateRoute';

const Login = () => {
  let history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  });
  return <div>Login</div>;
};

export default Login;
