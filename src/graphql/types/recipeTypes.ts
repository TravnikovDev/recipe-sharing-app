// src/graphql/types/recipeTypes.ts

import { gql } from "@apollo/client";

export const RECIPE_FRAGMENT = gql`
  fragment RecipeFragment on Recipe {
    id
    title
    description
    imageUrl
  }
`;

export const INGREDIENT_FRAGMENT = gql`
  fragment IngredientFragment on Ingredient {
    id
    name
    quantity
  }
`;

export const INSTRUCTION_FRAGMENT = gql`
  fragment InstructionFragment on Instruction {
    id
    stepNumber
    description
  }
`;

// Add any other recipe-related types and fragments here
