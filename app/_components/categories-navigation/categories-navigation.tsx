import { getAllCategories } from "@/app/_api/categories/getAllCategories";
import Link from "next/link";

import styles from "./categories-navigation.module.css";

export const CategoriesNavigation = async () => {
  const categories = await getAllCategories();

  return (
    <ul className={styles.categoriesNavigation}>
      <li>
        <Link href="/3d-models">All</Link>
      </li>
      {categories.map((category) => (
        <li key={category.slug}>
          <Link href={`/3d-models/categories/${category.slug}`}>
            {category.displayName}
          </Link>
        </li>
      ))}
    </ul>
  );
}
