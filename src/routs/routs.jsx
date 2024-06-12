import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Contact from "../pages/Contact";
import TodoDashboardLayout from "../layouts/TodoDashboardLayout";
import Todos from "../pages/Todo/Todos";
import EditProfile from "../pages/EditProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/editProfile",
        element: <EditProfile />,
      },
    ],
  },
  {
    path: "todoDashboard",
    element: <TodoDashboardLayout />,
    children: [
      {
        path: "",
        element: <Todos />,
      },
    ],
  },
]);
