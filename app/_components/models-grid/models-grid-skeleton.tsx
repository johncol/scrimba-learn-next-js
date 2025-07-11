import { ModelCardSkeleton } from "../model-card/model-card-skeleton";
import styles from "./models-grid.module.css";

type ModelsGridProps = {
  numberOfModels: number;
};

export const ModelsGridSkeleton = ({ numberOfModels }: ModelsGridProps) => {
  return (
    <section className={styles.modelsGrid}>
      {Array.from({ length: numberOfModels }).map((_, index) => (
        <ModelCardSkeleton key={index} />
      ))}
    </section>
  );
};
