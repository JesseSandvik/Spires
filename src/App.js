import { Routes, Route, useNavigate } from "react-router-dom";

import Button from "./components/atoms/button/Button";
import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import Heading from "./components/atoms/heading/Heading";
import Icon from "./components/atoms/icon/Icon";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";

import "./css/styles.css";

function App() {
  const navigate = useNavigate();

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
      <Footer>&copy; jessesandvik {new Date().getFullYear()}</Footer>
    </div>
  );
}

export default App;
