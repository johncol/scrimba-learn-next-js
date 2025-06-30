const config = {
  plugins: [
    "@tailwindcss/postcss",
    [
      "@csstools/postcss-global-data",
      { files: ["./app/_styles/media-queries.css"] },
    ],
    "postcss-custom-media",
  ],
};

export default config;
