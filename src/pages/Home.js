import Heading from "../components/atoms/heading/Heading";
import NavigationLink from "../components/atoms/navigationLink/NavigationLink";

function Home() {
  return (
    <section id="home">
      <div>
        <Heading level="2">
          Plan & execute your next project with intent.
        </Heading>
        <p>With Spires, we aim higher.</p>
        <NavigationLink to="/signup">Let&apos;s get started.</NavigationLink>
      </div>
    </section>
  );
}

export default Home;
