import { Box, Flex, Image, useTheme, Button } from '@chakra-ui/core';
import React, { useState, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ProfileDropdown from './ProfileDropdown';

import fflFox from '../../assets/ffl.png';
import fflSmallFox from '../../assets/ffl_small.png';
import HeaderLink from './HeaderLink';
import { UserContext } from '../../providers/UserProvider';

const Header = () => {
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const user = useContext(UserContext);
  console.log(user);

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
      >
        <Image
          src={fflSmallFox}
          h="full"
          ml={1}
          p={2}
          display={{ base: 'block', sm: 'none', md: 'block', lg: 'none' }}
        />
        <Image
          src={fflFox}
          h="full"
          ml={1}
          p={2}
          display={{ base: 'none', sm: 'block', md: 'none', lg: 'block' }}
        />

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
          <Flex justify="center" p={2}>
            {user ? (
              <ProfileDropdown user={user} />
            ) : (
              <Button as={RouterLink} to="/login" rightIcon="arrow-forward">
                LOGIN
              </Button>
            )}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
