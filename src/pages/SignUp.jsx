import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/login_register/GoogleLogin";
import FacebookLogin from "../components/login_register/FacebookLogin";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  const [errors, setErrors] = useState(null);
  const [passMatch, setPassMatch] = useState(null);
  const { createUserWithEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrors(null);
    setPassMatch(null);
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setPassMatch("Password Not Match ");
    } else {
      createUserWithEmail(email, password)
        .then(() => {
          toast.success("Login success !!");
          navigate(from);
          form.reset();
        })
        .catch((error) => {
          setErrors(error.message);
          console.log(errors);
        });
    }
  };
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="w-full mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-amber-500 font-mono text-6xl">
                Welcome Back
              </span>{" "}
              <br />{" "}
              <span className="mx-auto text-5xl text-violet-800 ">To</span>{" "}
              <br />{" "}
              <span className="text-amber-500 font-mono text-6xl">
                Task Master
              </span>
            </h2>
            <p className="text-gray-600 text-2xl">
              Access your tasks and manage your projects with ease. Join Task
              Master today and stay organized like never before.
            </p>
          </div>
        </div>
        <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl bg-amber-200">
          <form onSubmit={handleSignIn} className="card-body font-bold">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
              {errors ? <p className="text-red-400">{errors}</p> : ""}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="confirmPassword"
                required
              />
              {passMatch ? <p className="text-red-400">{passMatch}</p> : ""}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <div className="text-center mb-5">
            <p className="text-xl font-medium font-serif">
              Already Have a Account ? Please !
              <Link className="text-orange-300" to={"/signIn"}>
                Login
              </Link>
            </p>
          </div>
          <div className="flex justify-center items-center w-full mb-4">
            <GoogleLogin />
            <div className="divider divider-horizontal">OR</div>
            <FacebookLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
