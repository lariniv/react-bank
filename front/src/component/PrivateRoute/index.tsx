import { Navigate } from "react-router";
import { useAuth } from "../../types/AuthContext";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { state } = useAuth();

  return state.user.email ? <>{children}</> : <Navigate to="/signup" />;
};

export default PrivateRoute;
