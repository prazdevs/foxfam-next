import React from 'react';
import { useContext } from 'react';
import { Button } from '@chakra-ui/core';
import { UserContext } from '../providers/UserProvider';
import { login, logout } from '../firebase';

const LoginPage = () => {
  const userContext = useContext(UserContext);

  console.log(userContext);
  return (
    <div>
      <Button onClick={login}>GOOGLE LOGIN</Button>
      <Button onClick={logout}>LOGOUT</Button>
    </div>
  );
};

export default LoginPage;
