import React from "react";
import { Button } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

// LoginPage component handles the UI for the login page
const LoginPage: React.FC = () => {
  // Destructuring the loginWithRedirect function from the useAuth0 hook
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  // Check if the user is already authenticated, then navigate to the dashboard
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  // Return null if the user is authenticated
  if (isAuthenticated) {
    return null;
  }

  return (
    !isAuthenticated && (
      <div className="grid grid-cols-2">
        {/* Left column: Background image */}
        <div
          className="h-screen"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
          }}
        />

        {/* Right column: Login form */}
        <div className="max-w-md h-screen p-3xl flex flex-col items-center justify-center gap-xl">
          {/* Company / Product Name */}
          <div className="w-full">
            <h1 className="font-bold">{process.env.REACT_APP_COMPANY_NAME}</h1>
          </div>

          {/* Login Button */}
          <div className="w-full">
            <Button
              block
              type="default"
              className="login-form-button"
              onClick={() => loginWithRedirect()}
            >
              Login to {process.env.REACT_APP_COMPANY_NAME}
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginPage;
