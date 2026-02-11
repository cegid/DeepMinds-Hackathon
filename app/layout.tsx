import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "amlou 1963",
  description: "Découvrez notre délicieux Amlou, une pâte à tartiner traditionnelle marocaine faite d'amandes, d'huile d'argan et de miel pur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
