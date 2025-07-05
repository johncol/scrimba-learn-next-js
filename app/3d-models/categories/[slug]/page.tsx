import { getCategoryBySlug } from "@/app/_api/categories/getCategoryBySlug";
import { getAllModelsByCategory } from "@/app/_api/models/getAllModelsByCategory";
import { ModelsGrid } from "@/app/_components/models-grid/models-grid";
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
    <main>
      {models.length > 0 ? (
        <ModelsGrid models={models} />
      ) : (
        <p>No models found for this category</p>
      )}
    </main>
  );
}
