"use client";

import Link from "next/link";
import styles from "./main-navigation.module.css";
import LogoMobile from "@/public/images/logo-mobile.svg";
import LogoDesktop from "@/public/images/logo-desktop.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export const MainNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.mainNavigation}>
      <Link href="/">
        <Image
          src={LogoMobile}
          alt="PrintForge Home"
          className={styles.logoMobile}
        />
        <Image
          src={LogoDesktop}
          alt="PrintForge Home"
          className={styles.logoDesktop}
        />
      </Link>
      <MainNavigationLink pathname={pathname} href="/3d-models">
        3D Models
      </MainNavigationLink>
      <MainNavigationLink pathname={pathname} href="/about">
        About
      </MainNavigationLink>
    </nav>
  );
};

type MainNavigationLinkProps = ComponentProps<typeof Link> & {
  pathname: string;
};

const MainNavigationLink: React.FC<MainNavigationLinkProps> = (props) => {
  const isActive = props.pathname.startsWith(props.href as string);
  return (
    <Link
      {...props}
      className={`${props.className} ${isActive ? styles.active : ""}`}
    />
  );
};
