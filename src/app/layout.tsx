import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins-regular",
  weight: "400"
});

const josefinSlab = localFont({
  src: "./fonts/JosefinSlab.ttf",
  variable: "--font-josefin-slab",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "Joshua Limpiado",
  description: "Joshua Limpiado's Personal Portfolio website",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsRegular.variable} ${josefinSlab.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
