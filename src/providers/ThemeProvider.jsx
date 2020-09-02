import React from 'react';
import {
  ThemeProvider as ChakraThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from '@chakra-ui/core';

import lightTheme from '../theme/lightTheme';
import darkTheme from '../theme/darkTheme';

const ThemeProvider = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <ChakraThemeProvider theme={colorMode === 'dark' ? darkTheme : lightTheme}>
      <ColorModeProvider>
        <CSSReset />
        {children}
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
};

export default ThemeProvider;
