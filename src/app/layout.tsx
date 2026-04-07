import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "@/components/footer";
import theme from "../theme/theme";
import "./globals.css";
import FocusTrap from "@mui/material/Unstable_TrapFocus";

export const metadata: Metadata = {
  title: "Evolve Construction Inc",
  description: "Plan. Manage. Build.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100vh" }}>
      <body style={{ height: "99vh" }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}> {children} </ThemeProvider>
        </AppRouterCacheProvider>
        <Footer />
      </body>
    </html>
  );
}
