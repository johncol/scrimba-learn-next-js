import { getAllModels } from "../_api/models/getAllModels";
import { getAllModelsByQuery } from "../_api/models/getAllModelsByQuery";
import { ModelsGrid } from "../_components/models-grid/models-grid";
import { ModelsSearchBar } from "../_components/models-search-bar/models-search-bar";
import { NoModelsFound } from "../_components/no-models-found/no-models-found";

interface PageProps {
  searchParams: Promise<{
    query?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { query } = await searchParams;
  const models = await (query ? getAllModelsByQuery(query) : getAllModels());

  return (
    <main>
      <ModelsSearchBar query={query} action="/3d-models" />
      {models.length > 0 ? (
        <ModelsGrid models={models} />
      ) : (
        <NoModelsFound>No models found for this query</NoModelsFound>
      )}
    </main>
  );
}
