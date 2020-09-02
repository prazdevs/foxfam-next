import { theme as defaultTheme } from '@chakra-ui/core';

const breakpoints = ['576px', '768px', '992px', '1200px'];
[breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl] = breakpoints;

const theme = {
  ...defaultTheme,
  breakpoints,
  colors: {
    ...defaultTheme.colors,
    primary: '#ed8936',
  },
  fonts: {
    ...defaultTheme.fonts,
    body: 'Open Sans',
  },
};

export default theme;
