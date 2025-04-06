import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from '../pages/HomePage';
import {About} from '../pages/About'
import { ContactUs } from "../pages/ContactUs";
import { ShopAll } from '../pages/ShopAll'
import { ShopAllslug } from "../pages/ShopAllslug";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ClientLayout } from "../layouts/ClientLayout";
import { OrdersUserPage } from "../pages/OrdersUserPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { ThankyouPage } from "../pages/ThankyouPage";
import { OrderUserPage } from "../pages/OrderUserPage";

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
                path: 'login',
                element: <LoginPage/>,

            },
            {
                path: 'register',
                element: <RegisterPage/>,

            },
            {
                path: "account",
                element: <ClientLayout/>,
                children: [
                    {
                        path: '',
                        element: <Navigate to={'/account/orders'}/>,

                    },
                    {
                        path: 'orders',
                        element: <OrdersUserPage/>,
                    },
                    {
                        path: 'orders/:id',
                        element: <OrderUserPage/>,

                    },
                ],

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

    {
        path: '/checkout',
        element: <CheckoutPage/>,

    },
    {
        path: '/checkout/:id/thank-you',
        element: <ThankyouPage/>,
    }
    
]);
