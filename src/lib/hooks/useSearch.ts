// src/lib/hooks/useSearch.ts

import { useState, useEffect } from 'react';

interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  // Add any other fields as required
}

const useSearch = (recipes: Recipe[], searchTerm: string): Recipe[] => {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

  useEffect(() => {
    const filterRecipes = () => {
      if (!searchTerm) {
        setFilteredRecipes(recipes);
        return;
      }

      const searchLower = searchTerm.toLowerCase();

      const newFilteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchLower)
      );

      setFilteredRecipes(newFilteredRecipes);
    };

    filterRecipes();
  }, [recipes, searchTerm]);

  return filteredRecipes;
};

export default useSearch;
