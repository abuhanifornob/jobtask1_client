import { FaFacebook } from "react-icons/fa";
const FacebookLogin = () => {
  const handleFacebookLogin = async () => {
    console.log("Facebook Login");
  };
  return (
    <button
      onClick={handleFacebookLogin}
      className="btn text-xl flex justify-center items-center"
    >
      <FaFacebook /> With Facebook
    </button>
  );
};

export default FacebookLogin;
