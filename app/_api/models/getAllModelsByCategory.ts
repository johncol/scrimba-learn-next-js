import type { Model } from "@/types/models";
import { queryDB } from "../queryDB";

export const getAllModelsByCategory = (slug: string): Promise<Model[]> => {
  return queryDB<Model[]>((prisma) =>
    prisma.model.findMany({
      where: { category: { slug } },
      include: { category: true },
      orderBy: { dateAdded: "desc" },
    })
  );
};
