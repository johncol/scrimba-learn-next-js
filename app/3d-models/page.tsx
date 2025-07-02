import type { Model } from "@/types/models";
import ModelsJson from "@/data/models.json";
import { DefaultContainer } from "../_components/container/default-container";
import { ModelCard } from "../_components/model-card/model-card";

import styles from "./page.module.css";
import Link from "next/link";

export default async function Page() {
  const models = ModelsJson as Model[];

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
