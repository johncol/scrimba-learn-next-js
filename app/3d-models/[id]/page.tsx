import { getModelById } from "@/app/_api/getModelById";
import { DefaultContainer } from "@/app/_components/container/default-container";
import { PageHeading } from "@/app/_components/page-heading/page-heading";
import { Model } from "@/types/models";
import { notFound } from "next/navigation";

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
    <DefaultContainer>
      <PageHeading>{model.name}</PageHeading>
      <p>{model.description}</p>
    </DefaultContainer>
  );
};
