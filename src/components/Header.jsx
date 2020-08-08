import { Box, Flex, Image, Text, useTheme } from '@chakra-ui/core';
import React, { useState } from 'react';

import ProfileDropdown from './ProfileDropdown';

import fflFox from '../assets/ffl.png';
import fflSmallFox from '../assets/ffl_small.png';

const Header = () => {
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const links = ['standings', 'teams', 'players'];

  return (
    <Flex justify="center">
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        maxW={theme.breakpoints.lg}
        h="70px"
        w="100%"
        p={2}
        bg="gray.200"
        boxShadow="md"
        wrap="wrap"
      >
        <Image
          src={fflSmallFox}
          h="full"
          ml={1}
          display={{ base: 'block', sm: 'none', md: 'block', lg: 'none' }}
        />
        <Image
          src={fflFox}
          h="full"
          ml={1}
          display={{ base: 'none', sm: 'block', md: 'none', lg: 'block' }}
        />

        <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
          <svg
            fill="black"
            width="30px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ base: show ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
        >
          {links.map((link) => (
            <Text fontSize="lg" key={link} mx={2}>
              {link}
            </Text>
          ))}
          <Flex justify="center">
            <ProfileDropdown />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
