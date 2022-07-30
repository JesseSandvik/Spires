import { useNavigate } from "react-router-dom";

import Button from "../components/atoms/button/Button";
import Heading from "../components/atoms/heading/Heading";
import NavigationLink from "../components/atoms/navigationLink/NavigationLink";

function Login() {
  const navigate = useNavigate();

  return (
    <section id="login">
      <Heading level="2">Log in to Spires</Heading>
      <div>
        <Button onClick={() => navigate("/dashboard")}>
          continue as guest
        </Button>
        <Button onClick={() => console.log("click")}>
          continue with username & password
        </Button>
      </div>
      <div>
        <Heading>Don&apos;t have an account?</Heading>
        <NavigationLink to="/signup">sign up</NavigationLink>
      </div>
    </section>
  );
}

export default Login;
