import CategoriesJson from "@/data/categories.json";
import type { Category } from "@/types/models";

export const getAllCategories = async () => {
  return CategoriesJson as Category[];
};
