import type { Model } from "@/app/_types/models";
import ModelsJson from "@/app/_data/models.json";
import { DefaultContainer } from "../_components/container/default-container";

export default async function Page() {
  const models = ModelsJson as Model[];

  return (
    <DefaultContainer>
      <ul>
        {models.map((model) => (
          <li key={model.id}>{model.name}</li>
        ))}
      </ul>
    </DefaultContainer>
  );
}
