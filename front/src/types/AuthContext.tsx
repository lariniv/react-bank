import { createContext, useContext, useReducer } from "react";

interface AuthState {
  token: string | null;
  user: {
    name: string;
    id: number;
  };
}

type Action = { type: "LOGIN" | "LOGOUT" };

const AuthReducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      state.token = "default token";
      return { ...state };
    case "LOGOUT":
      state.token = null;
      return { ...state };
    default:
      return state;
  }
};

const AuthContext = createContext<
  | {
      state: AuthState;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    token: null,
    user: {
      name: "name",
      id: 1,
    },
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Error with AuthContext");
  }

  return context;
};
