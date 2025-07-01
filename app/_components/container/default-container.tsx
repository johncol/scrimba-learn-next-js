import styles from "./default-container.module.css";

export const DefaultContainer: React.FC<React.HTMLProps<HTMLDivElement>> = (
  props
) => {
  return (
    <div
      {...props}
      className={styles.defaultContainer + " " + props.className}
    />
  );
};
