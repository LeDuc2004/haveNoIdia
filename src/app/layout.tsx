"use client";

import AuthProvider from "@/content/AuthProvider";
import { MantineProvider, ColorSchemeScript, createTheme } from "@mantine/core";

import "@mantine/core/styles.css";
import "./globals.css";

export const theme = createTheme({
  
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body id="root">
        <AuthProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
