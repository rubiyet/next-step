import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://next-step-3.vercel.app"),
  title: "Next Step",
  description: "Developed by @Rubiyet",
  keywords: "next.js, tailwindcss, shadcdn",
  siteName: "Next Step ♾️",

  openGraph: {
    title: "Next Step",
    description: "Developed by @Rubiyet",
    url: "https://next-step-3.vercel.app",
    type: "website",
    siteName: "Next Step ♾️",
    images: [
      {
        url: "/rubiyet.jpeg",
        width: 1200,
        height: 630,
        alt: "Next Step",
      },
    ],
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
