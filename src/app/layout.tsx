import type { Metadata } from "next";
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
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
