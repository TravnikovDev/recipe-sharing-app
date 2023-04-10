// src/pages/recipes/[id].tsx

import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { Box, Heading, Text } from "@chakra-ui/react";

import Layout from "../../components/common/Layout";
import RecipeDetails from "../../components/RecipeDetails";
import { GET_RECIPE_BY_ID } from "../../graphql/queries/recipeQueries";

const RecipePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_RECIPE_BY_ID, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const recipe = data.recipe;

  return (
    <Layout>
      <Box mb={4}>
        <Heading as="h1">{recipe.title}</Heading>
        <Text fontSize="sm" color="gray.500">
          By {recipe.author.name}
        </Text>
      </Box>
      <RecipeDetails {...recipe} />
    </Layout>
  );
};

export default RecipePage;
