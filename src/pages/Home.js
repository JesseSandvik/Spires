import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Heading from "../components/atoms/heading/Heading";
import NavigationLink from "../components/atoms/navigationLink/NavigationLink";

function Home() {
  const { isAuthenticated } = useAuth0();
  const guestIsLoggedIn = sessionStorage.getItem("guest");

  return (
    <section id="home">
      {isAuthenticated && <Navigate to="/dashboard" />}
      {guestIsLoggedIn && <Navigate to="/dashboard" />}
      <div>
        <Heading level="2">
          Plan & execute your next project with intent.
        </Heading>
        <p>With Spires, we aim higher.</p>
        <NavigationLink to="/login">Let&apos;s get started.</NavigationLink>
      </div>
    </section>
  );
}

export default Home;
