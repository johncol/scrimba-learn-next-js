import React from "react";

import styles from "./page-heading.module.css";

type Props = React.HTMLProps<HTMLHeadingElement> & {
  fontSize?: "small" | "large";
};

export const PageHeading: React.FC<Props> = ({
  fontSize = "large",
  ...props
}) => {
  const className =
    styles.pageHeading + " " + fontSizeStyles[fontSize] + " " + props.className;

  return <h1 {...props} className={className} />;
};

const fontSizeStyles = {
  small: styles.small,
  large: styles.large,
};
