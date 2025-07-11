import type { Model } from "@/types/models";
import { queryDB } from "../queryDB";

export const getModelById = (id: string): Promise<Model | null> => {
  const idNumber = parseInt(id);
  if (isNaN(idNumber)) {
    throw new Error("Invalid Model ID");
  }

  return queryDB<Model | null>((prisma) =>
    prisma.model.findUnique({
      where: { id: idNumber },
      include: { category: true },
    })
  );
};
