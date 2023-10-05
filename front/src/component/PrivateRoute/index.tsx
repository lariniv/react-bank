import { Navigate, useNavigate } from "react-router";
import { useAuth } from "../../types/AuthContext";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const nav = useNavigate();
  const { state } = useAuth();
  let result = true;

  if (!state.user.email) {
    result = false;
  }

  if (!state.token) {
    result = false;
  }

  if (!state.user.isConfirm && state.user.email) {
    nav("/signup-confirm");
  }
  return result ? <>{children}</> : <Navigate to="/signup" />;
};

export default PrivateRoute;
