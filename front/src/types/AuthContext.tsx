import { createContext, useContext, useReducer } from "react";

interface User {
  email: string | null;
  id: number | null;
  password: string | null;
  isConfirm: boolean;
}

interface AuthState {
  token: string | null;
  user: User;
}

type Action = {
  type: "LOGIN" | "LOGOUT";
  email?: string;
  password?: string;
  id?: number;
  isConfirm?: boolean;
};

const tokenGeneration = () => {
  return (
    String(new Date().getTime()) +
    ALPHABET[Math.floor(Math.random() * ALPHABET.length)] +
    ALPHABET[Math.floor(Math.random() * ALPHABET.length)] +
    ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
  );
};

const ALPHABET: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const AuthReducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      if (!state.token) {
        state.token = tokenGeneration();
      }
      if (action.email) {
        state.user.email = action.email;
      }
      if (action.password) {
        state.user.password = action.password;
      }
      if (action.id) {
        state.user.id = action.id;
      }
      if (action.isConfirm) {
        state.user.isConfirm = action.isConfirm;
      }
      console.log(state);
      return state;
    case "LOGOUT":
      state.token = null;
      return state;

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
      email: null,
      id: null,
      password: null,
      isConfirm: false,
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
