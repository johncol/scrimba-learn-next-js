import type { Category } from "@/types/models";
import { queryDB } from "../queryDB";

export const getCategoryBySlug = (slug: string): Promise<Category> => {
  return queryDB(async (prisma) => {
    const category = await prisma.category.findUnique({
      where: { slug },
    });
    return category as Category;
  });
};
