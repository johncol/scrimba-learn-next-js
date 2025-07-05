import { getModelById } from "@/app/_api/models/getModelById";
import { Likes } from "@/app/_components/likes/likes";
import { PageHeading } from "@/app/_components/page-heading/page-heading";
import { Pill } from "@/app/_components/pill/pill";
import { Model } from "@/types/models";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

type ModelPageParams = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: ModelPageParams) {
  const { id } = await params;

  try {
    const model = await getModelById(id);

    if (!model) {
      return notFound();
    }

    return <ModelPage model={model} />;
  } catch (error) {
    console.warn(error);
    return notFound();
  }
}

const ModelPage = ({ model }: { model: Model }) => {
  return (
    <main className={styles.modelPage}>
      <ModelImage model={model} />
      <ModelInfo model={model} />
    </main>
  );
};

const ModelImage = ({ model }: { model: Model }) => {
  return (
    <Image
      src={model.image}
      alt={model.name}
      width={300}
      height={300}
      className={styles.modelImage}
    />
  );
};

const ModelInfo = ({ model }: { model: Model }) => {
  return (
    <div className={styles.modelInfo}>
      <Likes likes={model.likes} size="2.4rem" />
      <PageHeading className={styles.modelName} fontSize="small">
        {model.name}
      </PageHeading>
      <Pill>{model.category}</Pill>
      <p>{model.description}</p>
      <DateAdded model={model} />
      <BackLink />
    </div>
  );
};

const DateAdded = ({ model }: { model: Model }) => {
  const date = new Date(model.dateAdded);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <p className={styles.dateAdded}>Added on {formattedDate}</p>;
};

const BackLink = () => {
  return (
    <Link href="/3d-models" className={styles.backLink}>
      Back to overview
    </Link>
  );
};
