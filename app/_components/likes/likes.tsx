import Image from "next/image";
import styles from "./likes.module.css";

import HeartIcon from "@/public/icons/Heart.svg";

type Props = {
  likes: number;
};

export const Likes = ({ likes }: Props) => {
  return (
    <span className={styles.likes}>
      <Image src={HeartIcon} alt="Heart" />
      <span>{likes}</span>
    </span>
  );
};
