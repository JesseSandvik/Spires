import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "./components/atoms/button/Button";
import ExternalLink from "./components/atoms/externalLink/ExternalLink";
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
import Tasks from "./pages/Tasks";

import "./css/styles.css";

function App() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div className="app">
      <Header>
        <div>
          <Button onClick={() => navigate("/")}>
            <Icon className="fa-solid fa-backward" />
            <span>
              <Heading level="1">spires</Heading>
              <small>aim higher</small>
            </span>
          </Button>
        </div>
        <div>
          {isAuthenticated ? (
            <Button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              logout
            </Button>
          ) : (
            <Button onClick={() => navigate("/login")}>login</Button>
          )}
        </div>
      </Header>
      <Main className={isAuthenticated ? "authenticated" : "unauthenticated"}>
        {isAuthenticated && (
          <Sidebar className={isAuthenticated ? "authenticated" : ""}>
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
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Main>
      <Footer>
        <ExternalLink href="https://github.com/JesseSandvik/spires-front-end">
          <Icon className="fa-brands fa-github" />
        </ExternalLink>
        <div>
          <span>&copy;</span> jesse<span>sandvik</span>
          {new Date().getFullYear()}
        </div>
      </Footer>
    </div>
  );
}

export default App;
