import { Outlet } from "react-router-dom";

import Heading from "../../components/atoms/heading/Heading";
import NavigationLink from "../../components/atoms/navigationLink/NavigationLink";

function SignUpLayout() {
  return (
    <section id="signup">
      <Heading level="2">Sign up for Spires</Heading>
      <Outlet />
      <div>
        <Heading>Already have an account?</Heading>
        <NavigationLink to="/login">log in</NavigationLink>
      </div>
    </section>
  );
}

export default SignUpLayout;
