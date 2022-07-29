import Heading from "../components/atoms/heading/Heading";
import Icon from "../components/atoms/icon/Icon";
import List from "../components/atoms/list/List";
import Main from "../components/organisms/main/Main";
import NavigationLink from "../components/atoms/navigationLink/NavigationLink";
import Sidebar from "../components/organisms/sidebar/Sidebar";

function Projects() {
  return (
    <Main id="projects">
      <Sidebar>
        <nav>
          <List>
            <li>
              <NavigationLink to="/dashboard">
                <Icon className="fa-solid fa-house" />
                dashboard
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/projects">
                <Icon className="fa-solid fa-diagram-project" />
                projects
              </NavigationLink>
            </li>
          </List>
        </nav>
      </Sidebar>
      <div>
        <Heading level="2">dashboard</Heading>
      </div>
    </Main>
  );
}

export default Projects;
