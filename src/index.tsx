import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./input.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StoreProvider from "./StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeProvider from "./ThemeProvider";
import { Auth0Provider } from "@auth0/auth0-react";

// Retrieve Auth0 domain and client ID from environment variables
const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// Throw an error if Auth0 domain or client ID is missing
if (!auth0Domain || !auth0ClientId) {
  throw new Error(
    "Auth0 domain or client ID is missing in the environment variables."
  );
}

// Create a root using ReactDOM.createRoot for concurrent rendering
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Render the main application with necessary providers
root.render(
  <Auth0Provider
    domain={auth0Domain}
    clientId={auth0ClientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <StoreProvider>
      <ThemeProvider>
        <ToastContainer />
        <App />
      </ThemeProvider>
    </StoreProvider>
  </Auth0Provider>
);

// Measure and report web vitals for performance analysis
reportWebVitals();
