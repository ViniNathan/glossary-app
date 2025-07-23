import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "GlossaryUP",
  description: "GlossaryUP is a platform for students to refine their skills and knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="overflow-x-hidden w-screen bg-bg">
        {children}
      </body>
    </html>
  );
}
