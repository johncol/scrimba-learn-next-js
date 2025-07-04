import ModelsJson from "@/data/models.json";
import type { Model } from "@/types/models";

export const getAllModels = async () => {
  return ModelsJson as Model[];
};
