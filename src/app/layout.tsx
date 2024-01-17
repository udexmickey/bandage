import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import ThemeRegistry from "@/styles/Theme/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bandage E-commerce App",
  description:
    "Bandage E-commerce: Unveiling a world of possibilities. Explore, shop, and embrace the future of online retail. Discover a diverse range of products across various categories. Your journey to a seamless and delightful shopping experience begins with Bandage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
