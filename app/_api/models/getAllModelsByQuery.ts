import type { Model } from "@/types/models";
import { getAllModels } from "./getAllModels";

export const getAllModelsByQuery = async (query: string) => {
  const models = await getAllModels();
  return models.filter((model: Model) => {
    return (
      model.name.toLowerCase().includes(query.toLowerCase()) ||
      model.description.toLowerCase().includes(query.toLowerCase())
    );
  });
};
