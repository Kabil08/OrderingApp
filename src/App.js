import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Header from "./components/Header";
// import Body from "./components/Body";
import ReachUs from "./components/ReachUs";
import ErrorBoundary from "./components/ErrorBoundary";
import ReceipeInfo from "./components/ReceipeInfo";

const Body = lazy(() => import("./components/Body"));
const Header = lazy(() => import("./components/Header"));

const Layout = () => {
    return (
        <>
            <Suspense>
                <Header />
                <Outlet />
            </Suspense>
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
                element: (
                    <Suspense fallback={<h1>Results Pending....</h1>}>
                        <Body />
                    </Suspense>
                )
            },
            {
                path: "/reach-us",
                element: <ReachUs mobileNo="9990001010" />
            },
            {
                path: "/receipe/:id",
                element: <ReceipeInfo />
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={mainRoutes} />);