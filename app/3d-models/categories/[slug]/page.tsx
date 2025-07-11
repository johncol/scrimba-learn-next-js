import { getCategoryBySlug } from "@/app/_api/categories/getCategoryBySlug";
import { getAllModelsByCategory } from "@/app/_api/models/getAllModelsByCategory";
import { ModelsGrid } from "@/app/_components/models-grid/models-grid";
import { ModelsGridSkeleton } from "@/app/_components/models-grid/models-grid-skeleton";
import { NoModelsFound } from "@/app/_components/no-models-found/no-models-found";
import { Suspense } from "react";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className={styles.main}>
      <Suspense
        fallback={
          <ModelsGridSkeleton
            numberOfModels={2 + Math.floor(Math.random() * 3)}
          />
        }
      >
        <CategoryPageContent slug={slug} />
      </Suspense>
    </main>
  );
}

const CategoryPageContent: React.FC<{ slug: string }> = async ({ slug }) => {
  const [category, models] = await Promise.all([
    getCategoryBySlug(slug),
    getAllModelsByCategory(slug),
  ]);

  return (
    <>
      {models.length > 0 ? (
        <ModelsGrid models={models} />
      ) : (
        <NoModelsFound>
          No models found for category
          &quot;{category ? category.displayName : slug}&quot;
        </NoModelsFound>
      )}
    </>
  );
};
