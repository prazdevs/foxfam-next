import React from 'react';
import { Button, Switch, useColorMode } from '@chakra-ui/core';
import { login, logout } from '../firebase';
import LoginForm from '../components/forms/LoginForm';

const LoginPage = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div>
      <Button onClick={login}>GOOGLE LOGIN</Button>
      <Button onClick={logout}>LOGOUT</Button>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
