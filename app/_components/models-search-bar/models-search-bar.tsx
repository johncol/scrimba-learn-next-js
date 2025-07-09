"use client";

import Form from "next/form";
import { useRouter } from "next/navigation";

import styles from "./models-search-bar.module.css";

type Props = {
  query: string | undefined;
  action: string;
};

export const ModelsSearchBar: React.FC<Props> = ({ query, action }) => {
  const router = useRouter();

  const navigateToModelsPage = () => {
    router.push("/3d-models");
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value.length === 0) {
      navigateToModelsPage();
    }
  };

  return (
    <Form className={styles.form} action={action}>
      <input
        type="search"
        name="query"
        placeholder="Search for a model"
        defaultValue={query}
        className={styles.input}
        onInput={handleInput}
      />
    </Form>
  );
};
