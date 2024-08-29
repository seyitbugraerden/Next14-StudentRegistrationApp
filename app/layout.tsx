import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { AtomProvider } from "@/components/atomProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Final VIP Kurs",
  description: "Bu uygulama sayesinde öğrencilere ait kurs programını sağlayabilirsiniz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950`}>
         <AtomProvider>
          <Navbar>{children}</Navbar>
        </AtomProvider> 
      </body>
    </html>
  );
}
