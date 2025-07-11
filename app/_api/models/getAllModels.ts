import type { Model } from "@/types/models";
import { queryDB } from "../queryDB";

export const getAllModels = (): Promise<Model[]> => {
  return queryDB<Model[]>((prisma) =>
    prisma.model.findMany({
      include: { category: true },
      orderBy: { dateAdded: "desc" },
    })
  );
};
