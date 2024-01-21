import React, { ReactNode } from "react";
import { ConfigProvider } from "antd";

// Define props interface for ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode;
}

// ThemeProvider component for customizing Ant Design theme
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6036D8", // Primary Color of Theme
        },
        components: {
          Layout: {
            siderBg: "white", // Background color of the sider in the Layout component
          },
          Menu: {
            itemActiveBg: "#E7E1F9", // Background color of the active menu item
            darkItemSelectedBg: "#E7E1F9", // Background color of the active menu item in dark mode
          },
          Typography: {}, // No specific customization for Typography component

          Button: {
            primaryColor: "#ffffff", // Text color of primary button
          },
          Input: {
            // Customization options for Input component (commented out for clarity)
            // borderRadius: 6,
            // colorBorder: "#D9D9D9",
            // borderBorder: 0,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
