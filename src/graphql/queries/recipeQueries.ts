// src/graphql/queries/recipeQueries.ts

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

export const GET_ALL_RECIPES = gql`
  query GetAllRecipes {
    recipes {
      id
      title
      description
      imageUrl
    }
  }
`;

export const GET_RECIPE_BY_ID = gql`
  query GetRecipeById($id: ID!) {
    recipe(id: $id) {
      id
      title
      description
      imageUrl
      ingredients {
        id
        name
        quantity
      }
      instructions {
        id
        stepNumber
        description
      }
    }
  }
`;

const MY_RECIPES = gql`
  query MyRecipes {
    myRecipes {
      id
      title
      description
      ingredients
      instructions
      imageUrl
    }
  }
`;

export const useMyRecipesQuery = () => {
  return useQuery(MY_RECIPES);
};

// Add any other recipe-related queries here
