import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@chakra-ui/core';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  &.active {
    border-bottom: solid 2px ${(props) => props.theme.colors.primary};
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
      _hover={{ textDecoration: 'none', color: 'primary' }}
    >
      {label}
    </StyledLink>
  );
};

export default HeaderLink;
