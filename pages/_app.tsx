import type { Metadata } from "next";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}