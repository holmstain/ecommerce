import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { CartContextProvider } from "@/hooks/useCart";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Holmstain Ecommerce Example",
  description: "Ecommerce website for porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
          <CartContextProvider>
            <div className="flex flex-col">
            <Navbar/>
            <main className="flex-grow">{children}</main>
            <Footer/>
            </div>
          </CartContextProvider>
        </body>
    </html>
  );
}
