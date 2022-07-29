import { useNavigate } from "react-router-dom";

import Button from "../components/atoms/button/Button";
import Heading from "../components/atoms/heading/Heading";

function Login() {
  const navigate = useNavigate();

  return (
    <section id="login">
      <div>
        <Heading level="2">Log in to Spires</Heading>
        <div>
          <Button onClick={() => navigate("/dashboard")}>
            continue as guest
          </Button>
          <Button onClick={() => console.log("click")}>
            continue with username
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Login;
