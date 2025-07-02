import { DefaultContainer } from "@/app/_components/container/default-container";
import { PageHeading } from "@/app/_components/page-heading/page-heading";

type ModelPageParams = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: ModelPageParams) {
  const { id } = await params;

  return (
    <DefaultContainer>
      <PageHeading>Model with ID {id}</PageHeading>
    </DefaultContainer>
  );
}
