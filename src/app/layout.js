// import {Inter} from "next/font/google";

import "./globals.css";
import Ad_banner from "@/components/Ad_banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientProvider from "@/components/ClientProvider";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "E-Commerce Clothing Store",
  description: "Website to E-Commerce Clothing store",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        {/* เชื่อมต่อไปยัง Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <ToastContainer position="top-right" />
        <ClientProvider>
          {/* <Ad_banner /> */}
          <Navbar />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
