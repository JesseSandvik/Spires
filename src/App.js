import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Button from "./components/atoms/button/Button";
import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import Heading from "./components/atoms/heading/Heading";
import Icon from "./components/atoms/icon/Icon";
import List from "./components/atoms/list/List";
import Main from "./components/organisms/main/Main";
import NavigationLink from "./components/atoms/navigationLink/NavigationLink";
import Sidebar from "./components/organisms/sidebar/Sidebar";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import Tasks from "./pages/Tasks";

import "./css/styles.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log({ location });

  return (
    <div className="app">
      <Header>
        <div>
          <Button onClick={() => navigate("/")}>
            <Icon className="fa-solid fa-backward" />
            <Heading level="1">spires</Heading>
          </Button>
        </div>
        <div>
          <Button onClick={() => navigate("/login")}>login</Button>
          <Button onClick={() => console.log("click")}>sign up</Button>
        </div>
      </Header>
      <Main>
        <Sidebar>
          <nav>
            <List>
              <li>
                <NavigationLink to="/dashboard">
                  <Icon className="fa-solid fa-house" />
                  dashboard
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/tasks">
                  <Icon className="fa-solid fa-thumbtack" />
                  tasks
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/projects">
                  <Icon className="fa-solid fa-diagram-project" />
                  projects
                </NavigationLink>
              </li>
            </List>
          </nav>
        </Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Main>
      <Footer>
        <div>&copy; jessesandvik {new Date().getFullYear()}</div>
      </Footer>
    </div>
  );
}

export default App;
