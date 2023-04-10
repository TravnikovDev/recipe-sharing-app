// src/components/Footer/index.tsx

import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box bg="gray.200" width="100%" padding="1rem">
      <Flex justifyContent="center">
        <Text>
          &copy; {new Date().getFullYear()} Recipe App. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
