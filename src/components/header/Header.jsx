import { Box, Flex, useTheme, Image } from '@chakra-ui/core';
import React, { useState } from 'react';

import ProfileDropdown from './ProfileDropdown';


import HeaderLink from './HeaderLink';
import Fox from '../../assets/fox.svg';

const Header = () => {
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const links = [
    {
      label: 'standings',
      to: 'standings',
    },
    {
      label: 'teams',
      to: 'teams',
    },
    {
      label: 'players',
      to: 'players',
    },
  ];

  return (
    <Flex justify="center">
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        maxW={theme.breakpoints.lg}
        h="70px"
        w="100%"
        bg="gray.200"
        boxShadow="md"
        wrap="wrap"
        pos="fixed"
        zIndex="1000"
      >
        <Image h="full" p={2} src={Fox} />
        <Box
          display={{ base: 'block', md: 'none' }}
          p={2}
          mr={1}
          onClick={handleToggle}
        >
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
          bg="gray.200"
        >
          <Flex direction={{ base: 'column', md: 'row' }} align="center">
            {links.map(({ label, to }) => (
              <HeaderLink key={to} to={to} label={label} />
            ))}
          </Flex>
          <ProfileDropdown />
          
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
