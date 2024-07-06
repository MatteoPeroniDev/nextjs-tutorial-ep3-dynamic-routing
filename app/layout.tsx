import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const pokemonFont = localFont({
  src: [
    {
      path: '../public/fonts/Pokemon Classic.ttf',
      weight: '400'
    }
  ],
  variable: '--font-pokemon',
  display: 'swap',
  adjustFontFallback: false
})

export const metadata: Metadata = {
  title: "NextJs Tutorial - EP.3 - Dynamic routing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pokemonFont.variable}>
        <main className="relative w-[500px] h-[500px] overflow-hidden outline outline-4 outline-black p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
