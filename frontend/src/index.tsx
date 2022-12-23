import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
    createBrowserRouter, Outlet,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import {StartPage} from "./pages/StartPage/StartPage";
import {LoginPage} from "./pages/ LoginPage/ LoginPage";
import {MainPage} from "./pages/MainPage/MainPage";
import {NewsArea} from "./pages/NewsArea/NewsArea";
import {CardFullDescriptionPage} from "./pages/CardFullDescriptionPage/CardFullDescriptionPage";
import {Provider} from "react-redux";
import {store} from "./store";

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
            {
                path: "news-area",
                element: <NewsArea/>,
            },
            {
                path: "information",
                element: <CardFullDescriptionPage/>,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
