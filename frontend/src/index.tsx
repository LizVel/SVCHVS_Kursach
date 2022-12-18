import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {
    createBrowserRouter, Outlet,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import {StartPage} from "./pages/StartPage/StartPage";
import {LoginPage} from "./pages/ LoginPage/ LoginPage";
import {MainPage} from "./pages/MainPage/MainPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <StartPage/>,
            },
            {
                path: "login",
                element: <LoginPage/>,
            },
            {
                path: "main",
                element: <MainPage/>,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
