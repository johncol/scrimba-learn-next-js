import styles from "./mobile-padded-container.module.css";

export const MobilePaddedContainer: React.FC<
  React.HTMLProps<HTMLDivElement>
> = (props) => {
  return (
    <div
      {...props}
      className={styles.mobilePaddedContainer + " " + props.className}
    />
  );
};
