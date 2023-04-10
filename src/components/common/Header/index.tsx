// src/components/Header/index.tsx

import React from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Box bg="blue.500" color="white" width="100%" padding="1rem">
      <Flex alignItems="center">
        <Heading as="h1" size="lg">
          Recipe App
        </Heading>
        <Spacer />
        {/* Add any additional header elements, such as navigation links, here */}
      </Flex>
    </Box>
  );
};

export default Header;
