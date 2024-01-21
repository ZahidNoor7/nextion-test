import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { PiPackage } from "react-icons/pi";
import { BsClipboardData } from "react-icons/bs";
import { TbBrandNexo } from "react-icons/tb";
import "./Sidebar.css";

// Define SidebarProps interface for future extensibility
interface SidebarProps {
  Collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

// Sidebar component with TypeScript
const Sidebar: React.FC<SidebarProps> = ({ Collapsed, setCollapsed }) => {
  // Function to create menu items
  function getItem(
    label: React.ReactNode,
    key: string,
    icon: React.ReactNode,
    children?: React.ReactNode[],
    type?: string
  ) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  // Define menu items
  const items = [
    getItem(<Link to="/dashboard">Dashboard</Link>, "1", <BsClipboardData />),
    getItem(<Link to="/products">Products</Link>, "2", <PiPackage />),
  ];

  return (
    <div>
      {/* Company Name and Logo */}
      <Link to="/dashboard">
        <div className="h-[64px] flex items-center cursor-pointer text-2xl text-purple font-[700] px-xl">
          {Collapsed ? (
            <TbBrandNexo />
          ) : (
            <div className="flex gap-sm items-center">
              <TbBrandNexo /> &nbsp; {process.env.REACT_APP_COMPANY_NAME}
            </div>
          )}
        </div>
      </Link>

      {/* Ant Design Menu for navigation */}
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        inlineCollapsed={Collapsed}
        items={items}
      />
    </div>
  );
};

export default Sidebar;
