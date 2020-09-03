import React from 'react';
import FormInput from './FormInput';
import {
  Stack,
  Button,
  Link,
  Text,
  IconButton,
  Tooltip, Heading
} from '@chakra-ui/core';
import { FiAtSign, FiLock } from 'react-icons/fi';
import { GrFacebookOption, GrGoogle } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  return (
    <form>
      <Stack align="center" spacing={12}>
        <Heading size="lg">Login</Heading>
        <Stack align="center" spacing={5} shouldWrapChildren>
          <FormInput
            id="email"
            label="Email"
            placeholder="Type your email"
            type="email"
            icon={FiAtSign}
          />
          <Stack>
            <FormInput
              id="password"
              label="Password"
              placeholder="Type your password"
              type="password"
              icon={FiLock}
            />
            <Link color="primary" alignSelf="flex-end" fontSize="sm">
              Forgot your passord?
            </Link>
          </Stack>
          <Button rounded="full" backgroundColor="primary">
            LOGIN
          </Button>
        </Stack>
        <Stack align="center">
          <Text fontSize="lg">or log in using</Text>
          <Stack isInline shouldWrapChildren>
            <Tooltip label="Google">
              <IconButton
                aria-label="Login with Google"
                backgroundColor="#ea4335"
                color="white"
                size="lg"
                isRound
                icon={GrGoogle}
              />
            </Tooltip>
            <Tooltip label="Facebook">
              <IconButton
                aria-label="Login with Facebook"
                backgroundColor="#3b5998"
                color="white"
                size="lg"
                isRound
                icon={GrFacebookOption}
              />
            </Tooltip>
          </Stack>
        </Stack>
        <Stack align="center" spacing="none">
          <Text fontSize="lg">or create an account</Text>
          <Link
            fontSize="lg"
            fontWeight="medium"
            color="primary"
            as={NavLink}
            to="signup"
          >
            SIGN UP
          </Link>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginForm;
