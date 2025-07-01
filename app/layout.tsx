import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./_styles/globals.css";
import { MainNavigation } from "./_components/main-navigation/main-navigation";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrintForge",
  description: "Following Scrimba course on Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <div className={styles.bodyWrapper}>
          <header>
            <MainNavigation />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
