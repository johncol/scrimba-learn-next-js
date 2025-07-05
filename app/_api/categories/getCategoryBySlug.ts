import type { Category } from "@/types/models";
import { getAllCategories } from "./getAllCategories";

export const getCategoryBySlug = async (slug: string) => {
  const categories = await getAllCategories();
  return categories.find((category: Category) => category.slug === slug);
};
