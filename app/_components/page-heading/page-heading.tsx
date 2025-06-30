import React from "react";

import styles from "./page-heading.module.css";

export const PageHeading: React.FC<React.HTMLProps<HTMLHeadingElement>> = (
  props
) => {
  return <h1 {...props} className={styles.pageHeading} />;
};
