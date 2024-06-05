import type { Metadata, Viewport } from "next";

const APP_NAME = "PWA App";
const APP_DEFAULT_TITLE = "My Awesome PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import AuthProvider from "@/AuthProvider";
import { Toaster } from "react-hot-toast";

import { ReduxProvider } from "@/redux-provider";
import Footer from "@/components/footer";
import dark from "../../public/dark.svg";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   applicationName: APP_NAME,
//   title: {
//     default: APP_DEFAULT_TITLE,
//     template: APP_TITLE_TEMPLATE,
//   },
//   description: APP_DESCRIPTION,
//   manifest: "./manifest.json",
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: "default",
//     title: APP_DEFAULT_TITLE,
//     // startUpImage: [],
//   },
//   formatDetection: {
//     telephone: false,
//   },
//   openGraph: {
//     type: "website",
//     siteName: APP_NAME,
//     title: {
//       default: APP_DEFAULT_TITLE,
//       template: APP_TITLE_TEMPLATE,
//     },
//     description: APP_DESCRIPTION,
//   },
//   twitter: {
//     card: "summary",
//     title: {
//       default: APP_DEFAULT_TITLE,
//       template: APP_TITLE_TEMPLATE,
//     },
//     description: APP_DESCRIPTION,
//   },
// };

// export const viewport: Viewport = {
//   themeColor: "#FFFFFF",
// };

export const metadata: Metadata = {
  manifest: "./manifest.json",
  title: "Buyer`s Edge Ecommarce App",
  description: "Buyer`s Edge Ecommarce App: Empowering ecommarce through Data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <ReduxProvider>
              <Navbar />
              {children}
              <Footer />
              <Toaster />
            </ReduxProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
