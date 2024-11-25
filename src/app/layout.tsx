import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Cristo24h - Comunidade Cristã online",
  description: "Vivendo com Cristo 24 horas por dia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
