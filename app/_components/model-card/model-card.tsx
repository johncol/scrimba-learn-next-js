import { Model } from "@/types/models";

import styles from "./model-card.module.css";
import Image from "next/image";
import { Pill } from "../pill/pill";
import { Likes } from "../likes/likes";

type Props = {
  model: Model;
  clickable?: boolean;
};

export const ModelCard = ({ model, clickable = true }: Props) => {
  return (
    <article className={styles.modelCard + " " + (clickable ? styles.clickable : "")}>
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
