import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Controle de estoque",
  description: "Sistema de controle de estoque para cadastrar produtos, movimentar estoque com entradas e saídas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={rubik.className} suppressHydrationWarning>
      <body className="dark:bg-stone-950">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
