import { theme } from '@chakra-ui/core';

const breakpoints = ['576px', '768px', '992px', '1200px'];
[breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl] = breakpoints;

const lightTheme = {
  ...theme,
  breakpoints,
};

export default lightTheme;
