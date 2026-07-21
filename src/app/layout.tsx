import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/shared/layouts/Header";
import Footer from "@/shared/layouts/Footer";
import MiniCart from "@/features/cart-and-order/components/cart/MiniCart";
import SuccessModal from "@/features/cart-and-order/components/cart/SuccessModal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxe Fashion - Thời Trang Công Sở Hiện Đại",
  description: "Cửa hàng thời trang công sở hiện đại",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </head>
      <body className={montserrat.className} suppressHydrationWarning>
        <Header />
        <main className="min-h-[50vh]">
          {children}
        </main>
        <Footer />
        <MiniCart />
        <SuccessModal />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick pauseOnHover theme="colored" />
      </body>
    </html>
  );
}
