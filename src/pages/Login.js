import { useNavigate } from "react-router-dom";

import Button from "../components/atoms/button/Button";
import Heading from "../components/atoms/heading/Heading";
import Main from "../components/organisms/main/Main";

function Login() {
  const navigate = useNavigate();

  return (
    <Main id="login">
      <div>
        <Heading level="2">Log in to Spires</Heading>
        <Button onClick={() => navigate("/dashboard")}>
          continue as guest
        </Button>
        <Button onClick={() => console.log("click")}>
          continue with username
        </Button>
      </div>
    </Main>
  );
}

export default Login;
