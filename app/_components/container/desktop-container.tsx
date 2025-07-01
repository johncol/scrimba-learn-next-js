import styles from "./desktop-container.module.css";

type Props = {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
};

export const DesktopContainer: React.FC<Props> = ({
  as: Component = "div",
  ...props
}) => {
  return (
    <Component
      {...props}
      className={styles.desktopContainer + " " + props.className}
    />
  );
};
