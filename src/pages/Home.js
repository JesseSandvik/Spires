import Heading from "../components/atoms/heading/Heading";
import Main from "../components/organisms/main/Main";

function Home() {
  return (
    <Main id="home">
      <div>
        <Heading level="2">Spires</Heading>
        <p>is a workflow application & management tool.</p>
      </div>
    </Main>
  );
}

export default Home;
