import { FaGoogle } from "react-icons/fa";
const GoogleLogin = () => {
  const handleGoogleLogin = async () => {};
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
