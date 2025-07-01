import styles from "./separator.module.css";

interface Props {
  width?: string | number;
}

export const Separator: React.FC<Props> = ({ width }) => {
  return <div style={{ width }} className={styles.separator} />;
};
