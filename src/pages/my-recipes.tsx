// src/pages/my-recipes.tsx

import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Layout from "../components/common/Layout";
import RecipeCard from "../components/RecipeCard";
import { useMyRecipesQuery } from "../graphql/queries/recipeQueries";

const MyRecipes = () => {
  const { data, error, loading } = useMyRecipesQuery();

  if (loading) {
    return <Layout>Loading...</Layout>;
  }

  if (error) {
    return <Layout>Error: {error.message}</Layout>;
  }

  return (
    <Layout>
      <Box maxWidth="1200px" mx="auto" mt="8">
        <Heading mb="8">My Recipes</Heading>
        {data.myRecipes.length === 0 ? (
          <Flex justifyContent="center" alignItems="center">
            <Heading size="md">You haven't created any recipes yet.</Heading>
          </Flex>
        ) : (
          <Stack spacing="6">
            {data.myRecipes.map((recipe: any) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </Stack>
        )}
      </Box>
    </Layout>
  );
};

export default MyRecipes;
