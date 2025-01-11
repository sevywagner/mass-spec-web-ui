import { createBrowserRouter } from "react-router";
import Header from "./layout/Header";
import ProcessMassValue from "../pages/ProcessMassValue";
import Graphs from "../pages/Graphs";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: '/mass-spec-web-ui',
        element: <Header />,
        children: [
            {
                path: '/mass-spec-web-ui/',
                element: <ProcessMassValue />
            },
            {
                path: '/mass-spec-web-ui/graphs',
                element: <Graphs />
            },
            {
                path: '/mass-spec-web-ui/about',
                element: <About />
            }
        ]
    }
]);

export default router;