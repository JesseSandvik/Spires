import Dashboard from "../pages/dashboard";
import HomePage from "../pages/home";

const routes = [
    {
        path: "/",
        name: 'Home Page',
        element: <HomePage />,
        component: HomePage,
        exact: true,
    },
    {
        path: "/dashboard",
        name: 'Dashboard',
        element: <Dashboard />,
        component: Dashboard,
        exact: true,
    },
];

export default routes;