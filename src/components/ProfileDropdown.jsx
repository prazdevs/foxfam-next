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

import avatar from '../assets/temp/avatar.jpg';

const ProfileDropdown = () => {
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
          <Avatar src={avatar} />
          <Flex maxW="200px" direction="column" ml={2}>
            <Text isTruncated>Aspect Of PraZ</Text>
            <Text isTruncated>Mid for GK</Text>
          </Flex>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>My FFL</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileDropdown;
