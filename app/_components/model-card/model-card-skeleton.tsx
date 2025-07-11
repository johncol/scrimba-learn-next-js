import { Likes } from "../likes/likes";
import { Pill } from "../pill/pill";
import styles from "./model-card.module.css";
import skeletonStyles from "./model-card-skeleton.module.css";

export const ModelCardSkeleton = () => {
  return (
    <article className={styles.modelCard + " " + skeletonStyles.modelCardSkeleton}>
      <div className={skeletonStyles.modelCardImage} />
      <div className={styles.modelCardContent}>
        <h3>Loading...</h3>
        <p>Loading...</p>
        <Pill className={styles.categoryPill + " " + skeletonStyles.categoryPill}>Loading...</Pill>
        <Likes likes={0} className={skeletonStyles.likes} />
      </div>
    </article>
  );
};
