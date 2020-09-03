import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@chakra-ui/core';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  &.active {
    border-bottom-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const HeaderLink = ({ label, to }) => {
  return (
    <StyledLink
      as={NavLink}
      to={to}
      fontSize="lg"
      mx={2}
      textTransform="uppercase"
      fontWeight="semibold"
      borderBottom="2px solid transparent"
      _hover={{ textDecoration: 'none', color: 'primary' }}
      _focus={{boxShadow: 'focus'}}
    >
      {label}
    </StyledLink>
  );
};

export default HeaderLink;
