import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caio Laurindo | Portfólio",
  description: "Portfólio de Caio Laurindo, desenvolvedor web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try {
            const storedTheme = localStorage.getItem("portfolio-theme");
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.dataset.theme = storedTheme === "dark" || storedTheme === "light"
              ? storedTheme
              : systemPrefersDark ? "dark" : "light";
          } catch {
            document.documentElement.dataset.theme = "light";
          }`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
