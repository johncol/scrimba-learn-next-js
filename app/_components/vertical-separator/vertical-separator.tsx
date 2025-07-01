import styles from "./vertical-separator.module.css";

interface Props {
  className?: string;
  height?: string | number;
}

export const VerticalSeparator: React.FC<Props> = ({ className, height }) => {
  return (
    <div
      style={{ height }}
      className={styles.verticalSeparator + " " + className}
    />
  );
};
