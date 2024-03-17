"use client";
import React from "react";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import {
  HomeOutlined,
  UserOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, ConfigProvider, theme } from "antd";
import Link from "next/link";

const { Content, Footer, Sider } = Layout;

const sideNavItems = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: <Link href="/">Home</Link>,
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: <Link href="/overview">Overview</Link>,
  },
  {
    key: "3",
    icon: <RadarChartOutlined />,
    label: <Link href="/fitness-test">Fitness Test</Link>,
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Dungeon Fit</title>
      <body className="bg-gray-800 text-base">
        <AntdRegistry>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
            }}
          >
            <Layout>
              <Sider
                breakpoint="lg"
                collapsedWidth="0"
              >
                <div className="demo-logo-vertical" />
                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  items={sideNavItems}
                />
              </Sider>
              <Layout>
                <Content>{children}</Content>
                <Footer>Footer</Footer>
              </Layout>
            </Layout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
