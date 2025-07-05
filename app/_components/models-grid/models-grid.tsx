import { Model } from "@/types/models";
import styles from "./models-grid.module.css";
import Link from "next/link";
import { ModelCard } from "../model-card/model-card";

type ModelsGridProps = {
  models: Model[];
};

export const ModelsGrid = ({ models }: ModelsGridProps) => {
  return (
    <section className={styles.modelsGrid}>
      {models.map((model) => (
        <Link key={model.id} href={`/3d-models/${model.id}`}>
          <ModelCard model={model} />
        </Link>
      ))}
    </section>
  );
};
