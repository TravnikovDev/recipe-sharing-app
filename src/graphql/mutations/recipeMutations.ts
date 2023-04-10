// src/graphql/mutations/recipeMutations.ts

import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";

// CREATE_RECIPE Mutation
const CREATE_RECIPE = gql`
  mutation CreateRecipe($input: RecipeInput!) {
    createRecipe(input: $input) {
      id
      title
      description
      ingredients
      instructions
      imageUrl
    }
  }
`;

export const UPDATE_RECIPE = gql`
  mutation UpdateRecipe($id: ID!, $input: RecipeInput!) {
    updateRecipe(id: $id, input: $input) {
      id
      title
      description
      imageUrl
    }
  }
`;

export const DELETE_RECIPE = gql`
  mutation DeleteRecipe($id: ID!) {
    deleteRecipe(id: $id) {
      id
    }
  }
`;

export const useCreateRecipeMutation = () => {
  const [createRecipeMutation, result] = useMutation(CREATE_RECIPE);
  return { createRecipe: createRecipeMutation, ...result };
};

// Add any other recipe-related mutations here
