import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import RootLayout from "./Components/Header/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <WelcomePage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
