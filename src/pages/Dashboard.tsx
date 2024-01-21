import React from "react";
import { Card, Avatar } from "antd";
import { useAuth0, User } from "@auth0/auth0-react";

// Define DashboardProps as an empty interface for future extensibility
interface DashboardProps {}

// Dashboard component displays user information if authenticated
const Dashboard: React.FC<DashboardProps> = () => {
  // Destructuring user and isAuthenticated from the useAuth0 hook
  const { user, isAuthenticated } = useAuth0<User>();

  return (
    <div>
      {/* Display content only if the user is authenticated */}
      {isAuthenticated && (
        <div className="p-4">
          {/* Card component to display user information */}
          <Card className="flex items-center justify-center">
            {/* User Avatar */}
            <div className="flex-shrink-0">
              <Avatar
                size={128}
                src={user?.picture}
                alt={user?.name as string}
              />
            </div>

            {/* User Details */}
            <div className="ml-4">
              {/* User Name */}
              <h1 className="">{user?.name}</h1>

              {/* User Email with font-bold styling */}
              <p className="font-bold">{user?.email}</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
