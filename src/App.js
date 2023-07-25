import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import RootLayout from "./Components/Header/RootLayout";
import AuthPage from "./Pages/Auth/AuthPage";
import Login from "./Pages/Auth/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <WelcomePage /> },
        {
          path: "/auth",
          element: <AuthPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
