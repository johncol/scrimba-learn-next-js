"use client";

import Link from "next/link";

import { Category } from "@/types/models";
import { usePathname } from "next/navigation";
import styles from "./categories-navigation.module.css";

type Props = {
  categories: Category[];
};

export const CategoriesNavigation = ({ categories }: Props) => {
  const pathname = usePathname();
  return (
    <ul className={styles.categoriesNavigation}>
      <li>
        <Link href="/3d-models">All</Link>
      </li>
      {categories.map((category) => (
        <li key={category.slug}>
          <CategoryLink category={category} pathname={pathname} />
        </li>
      ))}
    </ul>
  );
};

type CategoryLinkProps = {
  category: Category;
  pathname: string;
};

const CategoryLink = ({ category, pathname }: CategoryLinkProps) => {
  const linkPath = `/3d-models/categories/${category.slug}`;
  const isActive = pathname === linkPath;
  return (
    <Link href={linkPath} className={isActive ? styles.active : ""}>
      {category.displayName}
    </Link>
  );
};
