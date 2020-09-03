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
import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { logout } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';

const ProfileDropdown = () => {
  const user = useContext(UserContext);

  return (
    <Flex justify="center" p={2}>
      {user ? (
        <Menu>
          <MenuButton
            rounded="full"
            as={Button}
            rightIcon="chevron-down"
            h="auto"
            variantColor="orange"
            color="black"
            pl={1}
            pr={2}
            variant="ghost"
            _focus={{boxShadow: '0 0  3px #ed8936'}}
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
      ) : (
        <Button as={RouterLink} to="/login" rightIcon="arrow-forward" _focus={{boxShadow: '0 0  3px #ed8936'}}>
          LOGIN
        </Button>
      )}
    </Flex>
  );
};

export default ProfileDropdown;
