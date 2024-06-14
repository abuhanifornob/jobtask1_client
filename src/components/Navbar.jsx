import { Link } from "react-router-dom";
import logo from "../assets/Images/tskmlogo.jpg";
import useAuth from "../hooks/useAuth";
import { RxAvatar } from "react-icons/rx";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    logout().then(() => {
      toast.success("Logout Success");
    });
  };

  const [userInfo, setUserInfo] = useState([]);

  // Function to fetch tasks from the server
  const fetchUserInfo = async () => {
    try {
      const res = await fetch(`http://localhost:3000/users/${user.email}`);
      const data = await res.json();
      setUserInfo(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleProfile = async () => {
    fetchUserInfo();
  };

  return (
    <div>
      <div className="navbar bg-slate-600 text-white text-2xl fixed top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-xl dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/todoDashboard"}>Task</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <img className="w-10 h-10 rounded-full" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-2xl">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/todoDashboard"}>Task</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {!user && (
            <Link className="me-2" to={"/signIn"}>
              Sign In
            </Link>
          )}

          {user && (
            <div className="dropdown dropdown-end me-8">
              <div
                tabIndex={0}
                role="button"
                className=" m-1"
                onClick={handleProfile}
              >
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  <RxAvatar className="w-12 h-12" />
                )}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content text-xl z-[1] menu p-2 shadow bg-base-100 rounded-box w-100  text-center"
              >
                <div className="text-center text-xl font-semibold bg-slate-100 text-black p-4 ">
                  <div className="flex justify-center items-center my-4">
                    <img src={logo} alt="" className="w-32 h-32 rounded-full" />
                  </div>

                  <p className="mt-4"> {userInfo?.name}</p>
                  <p className="mt-4"> {userInfo.email}</p>
                  <div className="flex justify-between mt-4">
                    <Link to={"/editProfile"}>Edit Profile</Link>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
