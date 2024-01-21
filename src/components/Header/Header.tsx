import React from "react";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Dropdown, Space } from "antd";

// Define HeaderProps interface for future extensibility
interface HeaderProps {
  Collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

// Header component with TypeScript
const Header: React.FC<HeaderProps> = ({ Collapsed, setCollapsed }) => {
  // Destructuring logout and user from the useAuth0 hook
  const { logout, user } = useAuth0();

  // Menu items for the Dropdown
  const items = [
    {
      label: (
        // Logout button with onClick handler
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          LogOut
        </button>
      ),
      key: "1",
    },
  ];

  return (
    // Container for header elements
    <div className="flex justify-between pr-lg">
      {/* Collapse/Expand Button */}
      <Button
        type="text"
        icon={Collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!Collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />

      {/* User Dropdown */}
      <Dropdown
        menu={{
          // Dropdown menu items
          items,
        }}
        trigger={["click"]}
        className="cursor-pointer"
      >
        {/* User information display */}
        <Space>
          {/* Display user name or "Dev User" if not available */}
          <p className="text-purple text-lg font-[600]">
            {user?.name ? user.name : "Dev User"}
          </p>

          {/* Down arrow icon */}
          <DownOutlined style={{ color: "#6036D8", fontWeight: "600" }} />
        </Space>
      </Dropdown>
    </div>
  );
};

export default Header;
