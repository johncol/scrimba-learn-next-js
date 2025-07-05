import { getCategoryBySlug } from "@/app/_api/categories/getCategoryBySlug";
import { getAllModelsByCategory } from "@/app/_api/models/getAllModelsByCategory";
import { DefaultContainer } from "@/app/_components/container/default-container";
import { ModelsGrid } from "@/app/_components/models-grid/models-grid";
import { PageHeading } from "@/app/_components/page-heading/page-heading";
import { notFound } from "next/navigation";

type CategoryPageParams = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: CategoryPageParams) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return notFound();
  }

  const models = await getAllModelsByCategory(slug);

  return (
    <DefaultContainer>
      <PageHeading>{category.displayName}</PageHeading>
      {models.length > 0 ? (
        <ModelsGrid models={models} />
      ) : (
        <p>No models found for this category</p>
      )}
    </DefaultContainer>
  );
}
