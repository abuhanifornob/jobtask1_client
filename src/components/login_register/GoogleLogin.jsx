import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
const provider = new GoogleAuthProvider();
const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleGoogleLogin = async () => {
    googleLogin(provider)
      .then(() => {
        toast.success("Goole Login Success !!!");
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn text-xl flex justify-center items-center"
      >
        <FaGoogle /> With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
