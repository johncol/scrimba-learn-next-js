import { getAllModels } from "../_api/models/getAllModels";
import { ModelsGrid } from "../_components/models-grid/models-grid";

export default async function Page() {
  const models = await getAllModels();

  return (
    <main>
      <ModelsGrid models={models} />
    </main>
  );
}
