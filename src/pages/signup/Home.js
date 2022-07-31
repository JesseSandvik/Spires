import { useNavigate } from "react-router-dom";

import Button from "../../components/atoms/button/Button";

function SignUpHome() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/dashboard")}>continue as guest</Button>
      <Button onClick={() => navigate("/signup/username")}>
        create username & password
      </Button>
    </div>
  );
}

export default SignUpHome;
