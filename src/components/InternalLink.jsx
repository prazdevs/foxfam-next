import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@chakra-ui/core';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  &.active {
    border-bottom: solid 2px #ed8936;
    color: #ed8936;
  }
`;

const InternalLink = ({ label, to }) => {
  return (
    <StyledLink
      className="TESTESTES"
      as={NavLink}
      to={to}
      fontSize="lg"
      mx={2}
      textTransform="uppercase"
      fontWeight="semibold"
      _hover={{ textDecoration: 'none', color: 'orange.400' }}
    >
      {label}
    </StyledLink>
  );
};

export default InternalLink;
