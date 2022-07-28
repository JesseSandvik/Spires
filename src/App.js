import { Routes, Route, useNavigate } from "react-router-dom";

import Button from "./components/atoms/button/Button";
import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import Heading from "./components/atoms/heading/Heading";
import Icon from "./components/atoms/icon/Icon";
import List from "./components/atoms/list/List";
import NavigationLink from "./components/atoms/navigationLink/NavigationLink";
import Sidebar from "./components/organisms/sidebar/Sidebar";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";

import "./css/styles.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <Header>
        <div>
          <Button onClick={() => navigate("/")}>
            <Icon className="fa-solid fa-grip-lines-vertical" />
            <Heading level="1">spires</Heading>
          </Button>
        </div>
        <div>
          <Button onClick={() => navigate("/login")}>login</Button>
          <Button onClick={() => console.log("click")}>sign up</Button>
        </div>
      </Header>
      <Sidebar>
        <nav>
          <List>
            <li>
              <NavigationLink to="/dashboard">home</NavigationLink>
              <NavigationLink to="/dashboard">tasks</NavigationLink>
              <NavigationLink to="/dashboard">projects</NavigationLink>
            </li>
          </List>
        </nav>
      </Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer>&copy; jessesandvik {new Date().getFullYear()}</Footer>
    </div>
  );
}

export default App;
