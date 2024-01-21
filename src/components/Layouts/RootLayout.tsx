import React, { ReactNode, useState } from "react";
import { Layout, theme } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "../Header/Header";

const { Header, Sider, Content } = Layout;

interface RootLayoutProps {
  children: ReactNode; // will be a page or nested layout
}

/**
 * RootLayout Component:
 * A layout component that includes a sidebar, header, and content area.
 * Uses Ant Design's Layout component for structure.
 *
 * @param children - The content to be rendered within the layout.
 */
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  // Extract color token for background from Ant Design theme
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // State to manage sidebar collapse/expand
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="h-screen">
      {/* Sidebar */}
      <Sider
        width="14%"
        collapsible
        trigger={null}
        collapsed={collapsed}
        className="overflow-auto"
      >
        <Sidebar setCollapsed={setCollapsed} Collapsed={collapsed} />
      </Sider>

      <Layout>
        {/* Header */}
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <DashboardHeader setCollapsed={setCollapsed} Collapsed={collapsed} />
        </Header>

        {/* Content Area */}
        <Content
          className="overflow-auto"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
