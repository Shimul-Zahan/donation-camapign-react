import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Banner from "../Header/Banner/Banner";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home />,
                // loader: () => fetch('/data.json'),
            },
            {
                path: '/donation',
                element: <Donation />,
            },
            {
                path: '/statistics',
                element: <Statistics/>,
            },
        ]
    }
])

export default router