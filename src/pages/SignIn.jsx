import { Link } from "react-router-dom";
import GoogleLogin from "../components/login_register/GoogleLogin";
import FacebookLogin from "../components/login_register/FacebookLogin";

const SignIn = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse my-18">
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
        <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center mb-5">
            <p className="text-xl font-medium font-serif">
              If You New Hear ? Please !
              <Link className="text-orange-300" to={"/signUp"}>
                Sign Up
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

export default SignIn;
