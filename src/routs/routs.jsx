import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Contact from "../pages/Contact";
import TodoDashboardLayout from "../layouts/TodoDashboardLayout";
import Todos from "../pages/Todo/Todos";
import EditProfile from "../pages/EditProfile";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import CreateTask from "../pages/CreateTask";
import Task from "../pages/Todo/Task";
import EditTask from "../pages/Todo/EditTask";
import OngingTask from "../pages/Todo/OngingTask";
import CompleteTask from "../pages/Todo/CompleteTask";
import OngoingTaskEdit from "../pages/Todo/OngoingTaskEdit";
import AllTask from "../pages/Todo/AllTask";

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
    element: (
      <PrivetRoute>
        <TodoDashboardLayout />
      </PrivetRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <PrivetRoute>
            {" "}
            <Todos />
          </PrivetRoute>
        ),
      },
      {
        path: "createTask",
        element: (
          <PrivetRoute>
            <CreateTask />
          </PrivetRoute>
        ),
      },
      {
        path: "task",
        element: (
          <PrivetRoute>
            <Task />
          </PrivetRoute>
        ),
      },
      {
        path: "all",
        element: (
          <PrivetRoute>
            <AllTask />
          </PrivetRoute>
        ),
      },
      {
        path: "ongoing",
        element: (
          <PrivetRoute>
            <OngingTask />
          </PrivetRoute>
        ),
      },
      {
        path: "complete",
        element: (
          <PrivetRoute>
            <CompleteTask />
          </PrivetRoute>
        ),
      },
      {
        path: "task/edit-task/:id",
        element: <EditTask />,
      },
      {
        path: "ongoing/edit-task/:id",
        element: <OngoingTaskEdit />,
      },
    ],
  },
]);
