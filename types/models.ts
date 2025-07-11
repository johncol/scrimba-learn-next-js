export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: Category;
  dateAdded: string;
};

export type Category = {
  id: number;
  slug: string;
  displayName: string;
};
