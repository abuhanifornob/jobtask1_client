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
  // Google Handle
  const handleGoogleLogin = async () => {
    googleLogin(provider)
      .then((data) => {
        toast.success("Goole Login Success !!!");
        // Collet User infor from Google Login
        const userInfo = {
          name: data.user.displayName,
          email: data.user.email,
        };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });

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
