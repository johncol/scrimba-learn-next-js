export default function Home() {
  return (
    <section>
      <Title />
      <Subtitle />
    </section>
  );
}

const Title = () => {
  return <h1>Discover what’s possible with 3D printing</h1>;
};

const Subtitle = () => {
  return (
    <p>
      Join our community of creators and explore a vast library of
      user-submitted models.
    </p>
  );
};
