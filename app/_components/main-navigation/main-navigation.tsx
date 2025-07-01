import Link from "next/link";
import styles from "./main-navigation.module.css";
import LogoMobile from "@/public/images/logo-mobile.svg";
import LogoDesktop from "@/public/images/logo-desktop.svg";
import Image from "next/image";

export const MainNavigation = () => {
  return (
    <nav className={styles.mainNavigation}>
      <Link href="/">
        <Image src={LogoMobile} alt="PrintForge Home" className={styles.logoMobile} />
        <Image src={LogoDesktop} alt="PrintForge Home" className={styles.logoDesktop} />
      </Link>
      <Link href="/3d-models">3D Models</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};
