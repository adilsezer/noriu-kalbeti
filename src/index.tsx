// Import necessary libraries and components
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import AuthProvider from "./contexts/AuthContext";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// Render the main App component with React-Router and AuthProvider
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
