import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import lightTheme from './theme/lightTheme';
import Routes from './Routes';
import Container from './components/ui/Container';
import UserProvider from './providers/UserProvider';

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider theme={lightTheme}>
        <CSSReset />
        <BrowserRouter>
          <Header />
          <Container>
            <Routes />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
