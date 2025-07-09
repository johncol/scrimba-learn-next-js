import { getAllModels } from "../_api/models/getAllModels";
import { getAllModelsByQuery } from "../_api/models/getAllModelsByQuery";
import { ModelsGrid } from "../_components/models-grid/models-grid";

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
      <ModelsGrid models={models} />
    </main>
  );
}
