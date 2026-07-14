import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      </body>
    </html>
  );
}
