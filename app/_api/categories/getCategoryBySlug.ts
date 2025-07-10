import type { Category } from "@/types/models";
import { queryDB } from "../queryDB";

export const getCategoryBySlug = (slug: string): Promise<Category | null> => {
  return queryDB<Category | null>((prisma) =>
    prisma.category.findUnique({ where: { slug } })
  );
};
