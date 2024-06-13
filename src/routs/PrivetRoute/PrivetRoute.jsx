import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="text-4xl flex justify-center items-center">
        {" "}
        Loading .....
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/signIn"} state={{ from: location }} replace />;
};

export default PrivetRoute;
