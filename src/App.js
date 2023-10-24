import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./Pages/Welcome/WelcomePage";
import RootLayout from "./Components/Header/RootLayout";
import AuthPage, { action as registerAction } from "./Pages/Auth/AuthPage";
import Login, { action as loginAction } from "./Pages/Auth/LoginPage";
import ErrorPage from "./Pages/Error/ErrorPage";
import HomePage from "./Pages/Home/HomePage";
import ProductsPage from "./Pages/Products/ProductsPage";
import { TokenLoader, logoutAction } from "./Pages/Auth/AuthLogic";
import { routeProtectionLoader } from "./Pages/Auth/AuthLogic";

import ProductDetailsPage, {
  loader as prodDetailsLoader,
} from "./Pages/Products/Product/ProductDetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      id: "root",
      loader: TokenLoader,

      children: [
        { index: true, element: <WelcomePage /> },
        {
          path: "/auth",
          element: <AuthPage />,
          action: registerAction,
        },
        {
          path: "/login",
          element: <Login />,
          action: loginAction,
        },
        {
          path: "/home",
          element: <HomePage />,
          // loader: routeProtectionLoader,
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/products/:productID",
          element: <ProductDetailsPage />,
          loader: prodDetailsLoader,
        },
        {
          path: "/logout",
          action: logoutAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
