import type { Model } from "@/types/models";
import { getAllModels } from "./getAllModels";

export const getModelById = async (id: string) => {
  const idNumber = parseInt(id);
  if (isNaN(idNumber)) {
    throw new Error("Invalid Model ID");
  }

  const models = await getAllModels();
  return models.find((model: Model) => model.id === idNumber);
};
