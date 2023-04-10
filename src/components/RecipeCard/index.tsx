// src/components/RecipeCard/index.tsx

import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Tag,
  Spacer,
} from "@chakra-ui/react";

interface RecipeCardProps {
  title: string;
  imageUrl: string;
  description: string;
  tags: string[];
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  imageUrl,
  description,
  tags,
}) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
    >
      <Image src={imageUrl} alt={title} />
      <VStack p="6" spacing={3} alignItems="start">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text noOfLines={2}>{description}</Text>
        <HStack spacing={1}>
          {tags.map((tag, index) => (
            <Tag key={index} size="sm" colorScheme="blue">
              {tag}
            </Tag>
          ))}
        </HStack>
        <Spacer />
      </VStack>
    </Box>
  );
};

export default RecipeCard;
