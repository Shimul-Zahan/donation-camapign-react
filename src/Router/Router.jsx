import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Banner from "../Home/Banner/Banner";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Donation from "../Donation/Donations";
import Statistics from "../Statistics/Statistics";
import CardDetails from "../CardDetails/CardDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/donation',
                element: <Donation />,
            },
            {
                path: '/statistics',
                element: <Statistics />,
            },
            {
                path: '/card/:id',
                element: <CardDetails />,
                loader: () => fetch('/data.json'),
            },
        ]
    }
])

export default router