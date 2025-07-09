"use client";

import styles from "./models-search-bar.module.css";

type Props = {
  query: string | undefined;
  onClear: () => void;
};

export const ModelsSearchBar: React.FC<Props> = ({ query, onClear }) => {
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value.length === 0) {
      onClear();
    }
  };

  return (
    <form className={styles.form}>
      <input
        type="search"
        name="query"
        placeholder="Search for a model"
        defaultValue={query}
        className={styles.input}
        onInput={handleInput}
      />
    </form>
  );
};