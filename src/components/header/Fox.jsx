import React from 'react';
import { Image } from '@chakra-ui/core';

import fflFox from '../../assets/ffl.png';
import fflSmallFox from '../../assets/ffl_small.png';

const Fox = () => {
  return (
    <>
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
    </>
  );
};

export default Fox;
