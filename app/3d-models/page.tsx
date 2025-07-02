import type { Model } from "@/types/models";
import ModelsJson from "@/data/models.json";
import { DefaultContainer } from "../_components/container/default-container";
import { ModelCard } from "../_components/model-card/model-card";

import styles from "./page.module.css";

export default async function Page() {
  const models = ModelsJson as Model[];

  return (
    <DefaultContainer className={styles.modelsPage}>
      {models.map((model) => (
        <ModelCard key={model.id} model={model} />
      ))}
    </DefaultContainer>
  );
}
