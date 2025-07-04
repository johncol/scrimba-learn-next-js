import Image from "next/image";
import styles from "./likes.module.css";

import HeartIcon from "@/public/icons/Heart.svg";
import { CSSProperties } from "react";

type Props = {
  likes: number;
  size?: string;
};

export const Likes = ({ likes, size }: Props) => {
  return (
    <span
      className={styles.likes}
      style={{ "--font-size": size } as CSSProperties}
    >
      <Image src={HeartIcon} alt="Heart" />
      <span>{likes}</span>
    </span>
  );
};
