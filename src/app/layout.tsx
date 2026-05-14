import type { Metadata } from "next";
import { Inter, Roboto_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Kumar - Web Developer",
  description: "Web Development Portfolio of Ayush Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} ${bebasNeue.variable} h-full antialiased bg-black text-white`}
    >
      <body className="min-h-full flex flex-col bg-black overflow-x-hidden selection:bg-lando-lime selection:text-black">
        {children}
      </body>
    </html>
  );
}
