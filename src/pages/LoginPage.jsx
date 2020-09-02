import React from 'react';
import { Button, Switch, useColorMode } from '@chakra-ui/core';
import { login, logout } from '../firebase';

const LoginPage = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div>
      <Button onClick={login}>GOOGLE LOGIN</Button>
      <Button onClick={logout}>LOGOUT</Button>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    </div>
  );
};

export default LoginPage;
