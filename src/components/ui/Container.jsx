import React from 'react';
import { Flex, useTheme } from '@chakra-ui/core';

const Container = ({ children }) => {
  const theme = useTheme();

  return (
    <Flex justify="center">
      <Flex mt="75px" maxW={theme.breakpoints.lg}>
        {children}
      </Flex>
    </Flex>
  );
};

export default Container;
