import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./component/AuthRoute";
import { AuthProvider } from "./types/AuthContext";
import WelcomePage from "./page/WelcomePage";
import SignUp from "./page/SignUp";
import PrivateRoute from "./component/PrivateRoute";
import SignUpConfirm from "./page/SignUpConfirm";
import SignIn from "./page/SignIn";
import Recovery from "./page/Recovery";
import RecoveryConfirm from "./page/RecoveryConfirm";
import Balance from "./page/Balance";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <AuthRoute>
                <WelcomePage />
              </AuthRoute>
            }
          />
          <Route
            path="signup"
            element={
              <AuthRoute>
                <SignUp />
              </AuthRoute>
            }
          />
          <Route
            path="signup-confirm"
            element={
              <PrivateRoute>
                <SignUpConfirm />
              </PrivateRoute>
            }
          />
          <Route
            path="signin"
            element={
              <AuthRoute>
                <SignIn />
              </AuthRoute>
            }
          />
          <Route
            path="recovery"
            element={
              <AuthRoute>
                <Recovery />
              </AuthRoute>
            }
          />
          <Route
            path="recovery-confirm"
            element={
              <AuthRoute>
                <RecoveryConfirm />
              </AuthRoute>
            }
          />
          <Route
            path="balance"
            element={
              <PrivateRoute>
                <Balance />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
