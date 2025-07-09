import Image from "next/image";
import { Button } from "./_components/button/button";
import { MobileContainer } from "./_components/container/mobile-container";
import { PageHeading } from "./_components/page-heading/page-heading";
import styles from "./page.module.css";

import HomeImage1 from "@/public/images/home-image-1.png";
import HomeImage2 from "@/public/images/home-image-2.png";
import Link from "next/link";
import { DesktopContainer } from "./_components/container/desktop-container";

export default function Home() {
  return (
    <DesktopContainer as="main" className={styles.homeWrapper}>
      <MobileContainer className={styles.textContainer}>
        <CatchPhrase />
        <Title />
        <Subtitle />
        <BrowseModelsButton />
      </MobileContainer>
      <HomeImage />
    </DesktopContainer>
  );
}

const CatchPhrase = () => {
  return (
    <p className={styles.catchPhrase}>
      Your go-to platform for 3D printing files
    </p>
  );
};

const Title = () => {
  return <PageHeading>Discover what’s possible with 3D printing</PageHeading>;
};

const Subtitle = () => {
  return (
    <p>
      Join our community of creators and explore a vast library of
      user-submitted models.
    </p>
  );
};

const BrowseModelsButton = () => {
  return (
    <Link href="/3d-models">
      <Button className={styles.browseModelsButton}>BROWSE MODELS</Button>
    </Link>
  );
};

const HomeImage = () => {
  return (
    <div>
      <Image
        src={HomeImage2}
        alt="3D printing"
        className={styles.homeImageMobile}
        priority
      />
      <Image
        src={HomeImage1}
        alt="3D printing"
        className={styles.homeImageDesktop}
        priority
        placeholder="blur"
      />
    </div>
  );
};
