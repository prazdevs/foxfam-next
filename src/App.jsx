import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import React from 'react';

import Header from './components/Header';
import lightTheme from './theme/lightTheme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CSSReset />
      <Header />
    </ThemeProvider>
  );
}

export default App;
