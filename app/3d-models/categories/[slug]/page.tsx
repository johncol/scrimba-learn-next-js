import { getCategoryBySlug } from "@/app/_api/categories/getCategoryBySlug";
import { getAllModelsByCategory } from "@/app/_api/models/getAllModelsByCategory";
import { ModelsGrid } from "@/app/_components/models-grid/models-grid";
import styles from "./page.module.css";
import { NoModelsFound } from "@/app/_components/no-models-found/no-models-found";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  const models = await getAllModelsByCategory(slug);

  return (
    <main className={styles.main}>
      {models.length > 0 ? (
        <ModelsGrid models={models} />
      ) : (
        <NoModelsFound>
          No models found for category &quot;{category ? category.displayName : slug}&quot;
        </NoModelsFound>
      )}
    </main>
  );
}
