import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuItem,
} from '@chakra-ui/core';
import React from 'react';

import { logout } from '../../firebase';

const ProfileDropdown = ({ user }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon="chevron-down"
        h="auto"
        variantColor="orange"
        color="black"
        pl={1}
        pr={2}
        variant="ghost"
      >
        <Flex align="center" p={1}>
          <Avatar src={user.photoURL} />
          <Flex maxW="200px" direction="column" ml={2}>
            <Text isTruncated>{user.displayName}</Text>
            <Text isTruncated>Mid for GK</Text>
          </Flex>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>My FFL</MenuItem>
        <MenuItem as="button" onClick={logout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileDropdown;
