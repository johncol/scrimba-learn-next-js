import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { categories as rawCategories } from "./data/categories";
import { models as rawModels } from "./data/models";

const prisma = new PrismaClient().$extends(withAccelerate());

async function main() {
  const dbCategories = await Promise.all(
    rawCategories.map((rawCategory) => {
      return prisma.category.create({ data: rawCategory });
    })
  );

  console.log(`Created ${dbCategories.length} categories`);

  const categoriesMap = new Map(
    dbCategories.map((dbCategory) => [dbCategory.slug, dbCategory])
  );

  const dbModels = await Promise.all(
    rawModels.map(({ category, ...rawModel }) => {
      return prisma.model.create({
        data: {
          ...rawModel,
          category: {
            connect: {
              id: categoriesMap.get(category)?.id,
            },
          },
        },
      });
    })
  );

  console.log(`Created ${dbModels.length} models`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
