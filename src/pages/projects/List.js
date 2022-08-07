import { useNavigate } from "react-router-dom";

import Button from "../../components/atoms/button/Button";
import Heading from "../../components/atoms/heading/Heading";

function ProjectsList() {
  const navigate = useNavigate();

  return (
    <section id="projects">
      <Heading level="2">projects</Heading>
      <div>
        <Button onClick={() => navigate("/projects/1")}>
          <Heading level="5">
            sample project name with a brief description
          </Heading>
        </Button>
      </div>
    </section>
  );
}

export default ProjectsList;
