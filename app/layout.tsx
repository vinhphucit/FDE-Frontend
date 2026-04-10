import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOCTITE Vietnam",
  description: "Multilingual LOCTITE adhesive solutions website built with Next.js"
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
