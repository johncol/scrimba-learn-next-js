import { PropsWithChildren } from "react";
import styles from "./no-models-found.module.css";

export const NoModelsFound: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.noModelsFound}>{children}</p>;
};
