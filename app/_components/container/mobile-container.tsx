import styles from "./mobile-container.module.css";

export const MobileContainer: React.FC<React.HTMLProps<HTMLDivElement>> = (
  props
) => {
  return (
    <div
      {...props}
      className={styles.mobileContainer + " " + props.className}
    />
  );
};
