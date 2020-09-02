import React from 'react';
import {
  Input,
  InputGroup,
  Box,
  InputLeftElement,
  FormControl,
  FormLabel,
} from '@chakra-ui/core';

const FormInput = ({ icon, id, ref, placeholder, label, type = 'text' }) => {
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputGroup>
        {icon ? <InputLeftElement children={<Box size={5} as={icon} />} /> : null}
        <Input
          type={type}
          id={id}
          variant="flushed"
          focusBorderColor="primary"
          placeholder={placeholder}
          ref={ref}
        />
      </InputGroup>
    </FormControl>
  );
};

export default FormInput;
