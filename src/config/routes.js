import Dashboard from "../pages/dashboard";
import HomePage from "../pages/home";
import Projects from "../pages/projects";
import ViewProject from '../views/project/viewProject';

const routes = [
    {
        path: "/",
        name: 'Home Page',
        element: <HomePage />,
        exact: true,
    },
    {
        path: "/dashboard",
        name: 'Dashboard',
        element: <Dashboard />,
        exact: true,
    },
    {
        path: "/projects",
        name: 'Projects',
        element: <Projects />,
        exact: true,
    },
    {
        path: "/projects/:projectId",
        name: 'View Project',
        element: <ViewProject />,
        exact: true,
    },
];

export default routes;