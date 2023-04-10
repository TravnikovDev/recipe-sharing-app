// src/pages/index.tsx

import React from "react";
import { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { Box, Flex, Heading } from "@chakra-ui/react";

import Layout from "../components/common/Layout";
import RecipeCard from "../components/RecipeCard";
import { GET_ALL_RECIPES } from "../graphql/queries/recipeQueries";

const HomePage: NextPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_RECIPES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const recipes = data.recipes;

  return (
    <Layout>
      <Heading as="h1" mb={4}>
        All Recipes
      </Heading>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        {recipes.map((recipe: any) => (
          <Box key={recipe.id} width={["100%", "45%"]} mb={4}>
            <RecipeCard {...recipe} />
          </Box>
        ))}
      </Flex>
    </Layout>
  );
};

export default HomePage;
