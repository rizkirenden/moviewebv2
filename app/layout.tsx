import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Belajar React",
  description: "Belajar React BY Rizki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
