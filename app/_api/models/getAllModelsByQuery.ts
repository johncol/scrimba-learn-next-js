import type { Model } from "@/types/models";
import { queryDB } from "../queryDB";

export const getAllModelsByQuery = async (query: string): Promise<Model[]> => {
  return queryDB<Model[]>((prisma) =>
    prisma.model.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
      },
      include: { category: true },
      orderBy: { dateAdded: "desc" },
    })
  );
};
