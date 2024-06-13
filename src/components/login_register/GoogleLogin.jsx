import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const provider = new GoogleAuthProvider();
const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const handleGoogleLogin = async () => {
    googleLogin(provider)
      .then(() => {
        toast.success("Goole Login Success !!!");
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
