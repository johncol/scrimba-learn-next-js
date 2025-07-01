import FlagIcon from "@/public/icons/Flag.svg";
import GlobeSimpleIcon from "@/public/icons/GlobeSimple.svg";
import StackIcon from "@/public/icons/Stack.svg";
import SquareImage from "@/public/images/square-image.png";
import Image from "next/image";
import { DefaultContainer } from "../_components/container/default-container";
import { HorizontalSeparator } from "../_components/horizontal-separator/horizontal-separator";
import { PageHeading } from "../_components/page-heading/page-heading";
import { VerticalSeparator } from "../_components/vertical-separator/vertical-separator";
import { Perk } from "./__components/perk/perk";
import styles from "./page.module.css";

export default function About() {
  return (
    <main>
      <DefaultContainer className={styles.heroSection}>
        <HomeImage />
        <section>
          <p className={styles.tinyTitle}>About PrintForge</p>
          <PageHeading>Empowering makers worldwide</PageHeading>
          <Intro />
        </section>
      </DefaultContainer>
      <PerksSection />
      <DefaultContainer>
        <VisionSection />
      </DefaultContainer>
    </main>
  );
}

const HomeImage = () => {
  return (
    <div>
      <Image
        src={SquareImage}
        alt="Hero image"
        className={styles.squareImage}
        priority
        placeholder="blur"
      />
    </div>
  );
};

const Intro = () => {
  return (
    <>
      <p>
        Founded in 2023, PrintForge has quickly become the go-to platform for 3D
        printing enthusiasts, makers, and professional designers to share and
        discover amazing STL files for 3D printing.
      </p>
      <p>
        Our mission is to foster a vibrant community where creativity meets
        technology, enabling anyone to bring their ideas to life through 3D
        printing.
      </p>
    </>
  );
};

const PerksSection: React.FC = () => {
  return (
    <section className={styles.perks}>
      <Perk
        icon={<Image src={StackIcon} alt="Stack" />}
        title="100K+ Models"
        description="Access our vast library of community-created 3D models, from practical tools to artistic creations."
      />
      <VerticalSeparator className={styles.separator} />
      <Perk
        icon={<Image src={GlobeSimpleIcon} alt="Globe" />}
        title="Active Community"
        description="Join thousands of makers who share tips, provide feedback, and collaborate on projects."
      />
      <VerticalSeparator className={styles.separator} />
      <Perk
        icon={<Image src={FlagIcon} alt="Flag" />}
        title="Free to Use"
        description="Most models are free to download, with optional premium features for power users."
      />
    </section>
  );
};

const VisionSection: React.FC = () => {
  return (
    <section className={styles.vision}>
      <PageHeading>Our vision</PageHeading>
      <p>
        At PrintForge, we believe that 3D printing is revolutionizing the way we
        create, prototype, and manufacture. Our platform serves as a bridge
        between designers and makers, enabling the sharing of knowledge and
        creativity that pushes the boundaries of what&apos;s possible with 3D
        printing.
      </p>
      <HorizontalSeparator width="245px" />
      <p>
        Whether you&apos;re a hobbyist looking for your next weekend project, an
        educator seeking teaching materials, or a professional designer wanting
        to share your creations, PrintForge provides the tools and community to
        support your journey in 3D printing.
      </p>
    </section>
  );
};
