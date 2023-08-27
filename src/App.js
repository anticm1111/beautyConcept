import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./Pages/Welcome/WelcomePage";
import RootLayout from "./Components/Header/RootLayout";
import AuthPage, { action as registerAction } from "./Pages/Auth/AuthPage";
import Login, { action as loginAction } from "./Pages/Auth/LoginPage";
import ErrorPage from "./Pages/Error/ErrorPage";
import HomePage from "./Pages/Home/HomePage";
import ProductsPage from "./Pages/Products/ProductsPage";
import { TokenLoader } from "./Pages/Auth/AuthLogic";

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
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
