import { Model } from "@/types/models";

import styles from "./model-card.module.css";
import Image from "next/image";
import { Pill } from "../pill/pill";
import { Likes } from "../likes/likes";

type Props = {
  model: Model;
};

export const ModelCard = ({ model }: Props) => {
  return (
    <article className={styles.modelCard}>
      <Image src={model.image} alt={model.name} width={300} height={300} />
      <div className={styles.modelCardContent}>
        <h3>{model.name}</h3>
        <p>{model.description}</p>
        <Pill>{model.category}</Pill>
        <Likes likes={model.likes} />
      </div>
    </article>
  );
};
