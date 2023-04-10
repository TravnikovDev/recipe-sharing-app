// src/pages/create-recipe.tsx

import React from "react";
import { NextPage } from "next";
import { Box, Heading, VStack } from "@chakra-ui/react";

import Layout from "../components/common/Layout";
import RecipeForm from "../components/RecipeForm";
import { useCreateRecipeMutation } from "../graphql/mutations/recipeMutations";

const CreateRecipePage: NextPage = () => {
  const { createRecipe } = useCreateRecipeMutation();

  const onSubmit = async (formData: any) => {
    try {
      await createRecipe({ variables: { input: formData } });
      alert("Recipe created successfully");
    } catch (error) {
      alert(`Error creating recipe: ${error}`);
    }
  };

  return (
    <Layout>
      <VStack spacing={4} align="stretch">
        <Heading as="h1">Create a new recipe</Heading>
        <Box>
          <RecipeForm onSubmit={onSubmit} />
        </Box>
      </VStack>
    </Layout>
  );
};

export default CreateRecipePage;
