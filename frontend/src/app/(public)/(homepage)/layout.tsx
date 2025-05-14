import { Metadata } from "next";
import Header from "@/app/components/Header";
import "../../globals.css";

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
      <body
        className="overflow-x-hidden w-screen pt-3 md:pt-5 bg-bg text-black"
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}