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
  shadow: {
    ...defaultTheme.shadows,
    focus: '0 0 2px 3px #ed8936',
  },
  fonts: {
    ...defaultTheme.fonts,
    body: 'Quicksand',
    heading: 'Quicksand',
  },
};

export default theme;
