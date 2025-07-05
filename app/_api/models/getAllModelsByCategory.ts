import type { Model } from "@/types/models";
import { getAllModels } from "./getAllModels";

export const getAllModelsByCategory = async (slug: string) => {
  const models = await getAllModels();
  return models.filter((model: Model) => model.category === slug);
};
