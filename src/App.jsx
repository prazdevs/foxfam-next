import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import lightTheme from './theme/lightTheme';
import Routes from './Routes';
import Container from './components/Container';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CSSReset />
      <BrowserRouter>
        <Header />
        <Container>
          <Routes />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
