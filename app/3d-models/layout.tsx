import { PropsWithChildren } from "react";
import { DefaultContainer } from "../_components/container/default-container";

import styles from "./layout.module.css";
import { CategoriesNavigation } from "../_components/categories-navigation/categories-navigation";
import { getAllCategories } from "../_api/categories/getAllCategories";

export default async function Layout({ children }: PropsWithChildren) {
  const categories = await getAllCategories();
  return (
    <DefaultContainer className={styles.layout}>
      <CategoriesNavigation categories={categories} />
      <div>{children}</div>
    </DefaultContainer>
  );
}
