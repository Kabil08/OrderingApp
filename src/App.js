import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import ReachUs from "./components/ReachUs";
import ErrorBoundary from "./components/ErrorBoundary";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/reach-us",
                element: <ReachUs />
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={mainRoutes} />);