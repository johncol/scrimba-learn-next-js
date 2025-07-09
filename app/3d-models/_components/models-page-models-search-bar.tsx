"use client";

import { ModelsSearchBar } from "@/app/_components/models-search-bar/models-search-bar";
import { useRouter } from "next/navigation";

export const ModelsPageModelsSearchBar: React.FC<{
  query: string | undefined;
}> = ({ query }) => {
  const router = useRouter();
  const navigateToModelsPage = () => {
    router.push("/3d-models");
  };

  return <ModelsSearchBar query={query} onClear={navigateToModelsPage} />;
};