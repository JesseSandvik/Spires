import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "../components/atoms/button/Button";
import Heading from "../components/atoms/heading/Heading";

function Login() {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  return (
    <section id="login">
      <Heading level="2">Log in to Spires</Heading>
      <div>
        <Button onClick={() => navigate("/dashboard")}>
          continue as guest
        </Button>
        <Button onClick={() => loginWithRedirect()}>continue with Auth0</Button>
      </div>
    </section>
  );
}

export default Login;
