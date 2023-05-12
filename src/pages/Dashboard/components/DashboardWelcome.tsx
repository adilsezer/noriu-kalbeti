import React from "react";
import { useAuthContext } from "../../../contexts/AuthContext";

export default function DashboardWelcome() {
  const { user } = useAuthContext();

  return (
    <div>
      <h1 className="dashboard-text">
        Welcome {user?.name} to your dashboard!
      </h1>
      <p>
        This is where you can manage your account and view everything about your
        lesson details.
      </p>
      <p>
        Please use the navigation bar on the left side to access the different
        sections of your dashboard.
      </p>
    </div>
  );
}
