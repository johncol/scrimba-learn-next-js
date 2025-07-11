import Image from "next/image";
import styles from "./likes.module.css";

import HeartIcon from "@/public/icons/Heart.svg";
import { CSSProperties } from "react";

type Props = {
  likes: number;
  size?: string;
  className?: string;
};

export const Likes = ({ likes, size, className }: Props) => {
  return (
    <span
      className={styles.likes + " " + className}
      style={{ "--font-size": size } as CSSProperties}
    >
      <Image src={HeartIcon} alt="Heart" />
      <span>{likes}</span>
    </span>
  );
};
