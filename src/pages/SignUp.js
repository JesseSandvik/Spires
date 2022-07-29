import { useNavigate } from "react-router-dom";

import Button from "../components/atoms/button/Button";
import Heading from "../components/atoms/heading/Heading";
import NavigationLink from "../components/atoms/navigationLink/NavigationLink";

function SignUp() {
  const navigate = useNavigate();

  return (
    <section id="signup">
      <div>
        <Heading level="2">Sign up for Spires</Heading>
        <div>
          <Button onClick={() => navigate("/dashboard")}>
            continue as guest
          </Button>
          <Button onClick={() => console.log("click")}>
            continue with username
          </Button>
        </div>
        <div>
          <Heading>Already have an account?</Heading>
          <NavigationLink to="/login">log in</NavigationLink>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
