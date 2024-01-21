import React from "react";
import RootLayout from "../Layouts/RootLayout";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// Define the props for the ProtectedRoute component
interface ProtectedRouteProps {
  path: string;
  element: React.ReactElement;
}

// ProtectedRoute component for rendering protected routes
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, element }) => {
  // Access the navigate function from react-router-dom
  const navigate = useNavigate();
  // Check if the user is authenticated using the useAuth0 hook
  const { isAuthenticated } = useAuth0();

  // If not authenticated, redirect to the login page and return null
  if (!isAuthenticated) {
    navigate("/");
    return null;
  }

  // If authenticated, render the RootLayout and Outlet for nested routes
  return <RootLayout>{isAuthenticated && <Outlet />}</RootLayout>;
};

export default ProtectedRoute;
