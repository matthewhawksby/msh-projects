import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// Load Open Sans (for Titles)
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  title: "Matthew Hawksby's Website",
  description: "A personal project webpage by Matthew Hawksby",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.variable}>
      <Head>
        {/* Load Iosevka from CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Iosevka/6.0.0/iosevka/iosevka.min.css" />
      </Head>
      <body className="font-body">{children}</body>
    </html>
  );
}
