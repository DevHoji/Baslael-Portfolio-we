// src/app/layout.tsx
import React from "react";
import "./globals.css"; // Import global styles
import Header from "../components/Header/Header"; // Import header component
import Footer from "../components/Footer/Footer"; // Import footer component

export const metadata = {
  title: "My Portfolio", // Title for your app
  description: "A personal portfolio showcasing my projects and skills", // Meta description
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Header />
        <main>{children}</main> {/* Main content (page-specific) */}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
