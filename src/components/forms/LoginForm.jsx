import React from 'react';
import FormInput from './FormInput';
import { Stack, Button, Link, Text, IconButton } from '@chakra-ui/core';
import { FiAtSign, FiLock } from 'react-icons/fi';
import { GrFacebookOption, GrGoogle } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  return (
    <form>
      <Stack align="center" spacing={6} shouldWrapChildren>
        <FormInput
          id="email"
          label="Email"
          placeholder="Type your email"
          type="email"
          icon={FiAtSign}
        />
        <FormInput
          id="password"
          label="Password"
          placeholder="Type your password"
          type="password"
          icon={FiLock}
        />
        <Button rounded="full" backgroundColor="primary">
          LOGIN
        </Button>
      </Stack>
      <Stack align="center">
        <Text>or log in using</Text>
        <Stack isInline>
          <IconButton
            aria-label="Login with Google"
            backgroundColor="#ea4335"
            color="white"
            size="lg"
            isRound
            icon={GrGoogle}
          />
          <IconButton
            aria-label="Login with Facebook"
            backgroundColor="#3b5998"
            color="white"
            size="lg"
            isRound
            icon={GrFacebookOption}
          />
        </Stack>
      </Stack>
      <Stack align="center">
        <Text>or create an account</Text>
        <Link color='primary' as={NavLink} to='signup'>SIGN UP</Link>
      </Stack>
    </form>
  );
};

export default LoginForm;
