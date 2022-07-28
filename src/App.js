import Button from "./components/atoms/button/Button";
import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import Heading from "./components/atoms/heading/Heading";
import Icon from "./components/atoms/icon/Icon";
import Main from "./components/organisms/main/Main";

import "./css/styles.css";

function App() {
  return (
    <div className="app">
      <Header>
        <div>
          <Button onClick={() => console.log("click")}>
            <Heading level="1">spires</Heading>
            <Icon className="fa-solid fa-grip-lines-vertical" />
          </Button>
        </div>
        <div>
          <Button onClick={() => console.log("click")}>login</Button>
          <Button onClick={() => console.log("click")}>sign up</Button>
        </div>
      </Header>
      <Main />
      <Footer>&copy; jessesandvik {new Date().getFullYear()}</Footer>
    </div>
  );
}

export default App;
