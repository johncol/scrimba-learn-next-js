import { PropsWithChildren } from "react";
import { DefaultContainer } from "../_components/container/default-container";

import styles from "./layout.module.css";
import { CategoriesNavigation } from "../_components/categories-navigation/categories-navigation";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DefaultContainer className={styles.layout}>
      <CategoriesNavigation />
      <div>{children}</div>
    </DefaultContainer>
  );
}
