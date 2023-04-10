// src/components/Layout/index.tsx

import React from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <VStack minHeight="100vh" spacing={0}>
      <Header />
      <Flex as="main" flexGrow={1} width="100%" padding="1rem">
        <Box width="100%" maxWidth="1200px" margin="0 auto">
          {children}
        </Box>
      </Flex>
      <Footer />
    </VStack>
  );
};

export default Layout;
