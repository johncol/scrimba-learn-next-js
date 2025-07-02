import styles from "./pill.module.css";

export const Pill: React.FC<React.HTMLProps<HTMLSpanElement>> = (props) => {
  return <span {...props} className={styles.pill + " " + props.className} />;
};
