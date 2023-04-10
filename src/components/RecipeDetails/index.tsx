// src/components/RecipeDetails/index.tsx

import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

interface RecipeDetailsProps {
  title: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({
  title,
  imageUrl,
  description,
  ingredients,
  instructions,
}) => {
  return (
    <VStack spacing={6} alignItems="start">
      <Heading as="h1" size="lg">
        {title}
      </Heading>
      <Image src={imageUrl} alt={title} borderRadius="lg" />
      <Text>{description}</Text>
      <Box>
        <Heading as="h2" size="md">
          Ingredients
        </Heading>
        <UnorderedList>
          {ingredients.map((ingredient, index) => (
            <ListItem key={index}>{ingredient}</ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box>
        <Heading as="h2" size="md">
          Instructions
        </Heading>
        <UnorderedList>
          {instructions.map((instruction, index) => (
            <ListItem key={index}>{instruction}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </VStack>
  );
};

export default RecipeDetails;
