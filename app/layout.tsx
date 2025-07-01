import type { Metadata } from "next";
import "./_styles/globals.css";
import { MainNavigation } from "./_components/main-navigation/main-navigation";
import styles from "./layout.module.css";
import { albertSans, montserratAlternates } from "./_styles/fonts";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "PrintForge",
  description: "Following Scrimba course on Next.js",
};

export default function RootLayout({ children }: PropsWithChildren) {
  const fonts = `${albertSans.variable} ${montserratAlternates.variable}`;
  return (
    <html lang="en">
      <body className={`${fonts} antialiased`}>
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
