import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./types/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
