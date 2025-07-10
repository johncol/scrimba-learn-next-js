import type { Category } from "@/types/models";
import { queryDB } from "../queryDB";

export const getAllCategories = async (): Promise<Category[]> => {
  return queryDB<Category[]>((prisma) =>
    prisma.category.findMany({
      orderBy: { displayName: "asc" },
    })
  );
};
