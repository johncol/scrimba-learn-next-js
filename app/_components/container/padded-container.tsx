import styles from "./padded-container.module.css";

export const PaddedContainer: React.FC<React.HTMLProps<HTMLDivElement>> = (
  props
) => {
  return <div {...props} className={styles.paddedContainer} />;
};