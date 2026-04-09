import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import theme from "../theme/theme";
import "./globals.css";

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
        <Navigation />
        <main className={"flex-1"}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}> {children} </ThemeProvider>
        </AppRouterCacheProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
