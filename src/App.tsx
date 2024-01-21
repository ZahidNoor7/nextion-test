import React from "react";
import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/AuthGuard/ProtectedRoutes";
import ProductListingPage from "./pages/ProductLisiting";
import ProductDetail from "./pages/ProductDetail";
import { Result } from "antd";

// NotFound component to display a 404 error page
const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
  );
};

// App component containing the main routing logic
function App() {
  return (
    <div className="App">
      {/* Router to handle navigation */}
      <Router>
        {/* Routes component to define application routes */}
        <Routes>
          {/* Route for the login page */}
          <Route path="/" element={<LoginPage />} />

          {/* ProtectedRoute for product listing with nested index route */}
          <Route
            path="products"
            element={
              <ProtectedRoute
                path="products"
                element={<ProductListingPage />}
              />
            }
          >
            <Route index element={<ProductListingPage />} />
          </Route>

          {/* ProtectedRoute for individual product detail with nested index route */}
          <Route
            path="product/:id"
            element={
              <ProtectedRoute path="product/:id" element={<ProductDetail />} />
            }
          >
            <Route index element={<ProductDetail />} />
          </Route>

          {/* ProtectedRoute for the dashboard with nested index route */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute path="dashboard" element={<Dashboard />} />
            }
          >
            <Route index element={<Dashboard />} />
          </Route>

          {/* Route for handling 404 Not Found */}
          <Route path="*" element={<Navigate to="/not-found" replace />} />

          {/* Route for displaying the Not Found page */}
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
