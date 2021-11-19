import { useLocation, Navigate } from "react-router";
import { useGlobalContext } from "../context/AppContext";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useGlobalContext();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;