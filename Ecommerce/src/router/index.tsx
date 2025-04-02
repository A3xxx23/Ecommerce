import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from '../pages/HomePage';
import {About} from '../pages/About'
import { ContactUs } from "../pages/ContactUs";
import { ShopAll } from '../pages/ShopAll'
import { ShopAllslug } from "../pages/ShopAllslug";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "Contact Us",
                element: <ContactUs/>,
            },
            {
                path: "Shop All",
                element: <ShopAll/>,
            },
            {
                path: 'products/:slug',
                element: <ShopAllslug/>,

            },
            {
                path: "account",
                element: <div>Account</div>,

            },
            {
                path: "faq",
                element: <div>FAQ</div>,
            },
            {
                path: "shipping",
                element: <div>Shipping</div>,
            },
            {
                path: "returns",
                element: <div>Returns</div>,
            },
        ],
    },
]);
