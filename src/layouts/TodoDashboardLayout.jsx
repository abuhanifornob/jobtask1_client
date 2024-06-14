import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const TodoDashboardLayout = () => {
  return (
    <>
      <Navbar />
      <div className="drawer lg:drawer-open mt-20">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet />

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            <li>
              <Link to={"task"}>Pending Task</Link>
            </li>
            <li>
              <Link to={"ongoing"}>Ongoing Task</Link>
            </li>
            <li>
              <Link to={"complete"}>completed Task</Link>
            </li>
            <li>
              <Link to={"all"}>All Task</Link>
            </li>
            <li>
              <Link to={"createTask"}>Create Task</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoDashboardLayout;
