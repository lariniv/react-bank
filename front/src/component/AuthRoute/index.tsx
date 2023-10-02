import { Navigate } from "react-router";
import { useAuth } from "../../types/AuthContext";

const AuthRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state } = useAuth();

  return state.token ? <Navigate to="/balance" /> : <>{children}</>;
};

export default AuthRoute;
