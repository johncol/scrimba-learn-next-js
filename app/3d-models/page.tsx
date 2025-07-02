import { DefaultContainer } from "../_components/container/default-container";
import { ModelCard } from "../_components/model-card/model-card";

import Link from "next/link";
import { getAllModels } from "../_api/getAllModels";
import styles from "./page.module.css";

export default async function Page() {
  const models = await getAllModels();

  return (
    <DefaultContainer className={styles.modelsPage}>
      {models.map((model) => (
        <Link key={model.id} href={`/3d-models/${model.id}`}>
          <ModelCard model={model} />
        </Link>
      ))}
    </DefaultContainer>
  );
}
