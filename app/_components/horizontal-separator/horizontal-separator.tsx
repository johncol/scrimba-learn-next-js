import styles from "./horizontal-separator.module.css";

interface Props {
  width?: string | number;
  className?: string;
}

export const HorizontalSeparator: React.FC<Props> = ({ width, className }) => {
  return (
    <div
      style={{ width }}
      className={styles.horizontalSeparator + " " + className}
    />
  );
};
