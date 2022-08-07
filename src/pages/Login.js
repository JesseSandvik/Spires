import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "../components/atoms/button/Button";
import Heading from "../components/atoms/heading/Heading";

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const guestIsLoggedIn = sessionStorage.getItem("guest");

  const handleGuestLogin = () => {
    sessionStorage.setItem("guest", true);
    navigate(0);
  };

  return (
    <section id="login">
      {isAuthenticated && <Navigate to="/dashboard" />}
      {guestIsLoggedIn && <Navigate to="/dashboard" />}
      <Heading level="2">Log in to Spires</Heading>
      <div>
        <Button onClick={handleGuestLogin}>continue as guest</Button>
        <Button onClick={() => loginWithRedirect()}>continue with Auth0</Button>
      </div>
    </section>
  );
}

export default Login;
