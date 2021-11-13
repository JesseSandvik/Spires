import Dashboard from "../pages/dashboard";
import HomePage from "../pages/home";

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
];

export default routes;