import type { Model } from "@/app/_types/models";
import ModelsJson from "@/app/_data/models.json";
import { MobilePaddedContainer } from "../_components/container/mobile-padded-container";

export default async function Page() {
  const models = ModelsJson as Model[];

  return (
    <MobilePaddedContainer>
      <ul>
        {models.map((model) => (
          <li key={model.id}>{model.name}</li>
        ))}
      </ul>
    </MobilePaddedContainer>
  );
}
