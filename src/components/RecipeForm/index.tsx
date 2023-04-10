// src/components/RecipeForm/index.tsx

import React from "react";
import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface RecipeFormProps {
  onSubmit: (data: RecipeFormData) => void;
}

export interface RecipeFormData {
  title: string;
  imageUrl: string;
  description: string;
  ingredients: string;
  instructions: string;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecipeFormData>();

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} alignItems="stretch">
        <FormControl isInvalid={!!errors.title}>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            {...register("title", { required: "Title is required" })}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.imageUrl}>
          <FormLabel htmlFor="imageUrl">Image URL</FormLabel>
          <Input
            id="imageUrl"
            {...register("imageUrl", { required: "Image URL is required" })}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.description}>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.ingredients}>
          <FormLabel htmlFor="ingredients">Ingredients</FormLabel>
          <Textarea
            id="ingredients"
            {...register("ingredients", {
              required: "Ingredients are required",
            })}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.instructions}>
          <FormLabel htmlFor="instructions">Instructions</FormLabel>
          <Textarea
            id="instructions"
            {...register("instructions", {
              required: "Instructions are required",
            })}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default RecipeForm;
