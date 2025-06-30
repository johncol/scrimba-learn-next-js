import { Button } from "./_components/button/button";
import { MobilePaddedContainer } from "./_components/container/mobile-padded-container";
import { PageHeading } from "./_components/page-heading/page-heading";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <HomeWrapper>
      <MobilePaddedContainer className={styles.textContainer}>
        <CatchPhrase />
        <Title />
        <Subtitle />
        <BrowseModelsButton />
      </MobilePaddedContainer>
      <HomeImage />
    </HomeWrapper>
  );
}

const HomeWrapper: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return <main {...props} className={styles.homeWrapper} />;
};

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
  return <Button className={styles.browseModelsButton}>BROWSE MODELS</Button>;
};

const HomeImage = () => {
  return (
    <div>
      <Image
        src="/images/home-image-2.png"
        alt="3D printing"
        width={1206}
        height={1201}
        className={styles.homeImageMobile}
        priority
      />
      <Image
        src="/images/home-image-1.png"
        alt="3D printing"
        width={1206}
        height={1201}
        className={styles.homeImageDesktop}
        priority
      />
    </div>
  );
};
