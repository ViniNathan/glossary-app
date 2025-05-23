import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "GlossaryUP - Register",
  description: "GlossaryUP is a platform for students to refine their skills and knowledge.",
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="overflow-x-hidden min-h-screen w-screen px-4 bg-bg text-white">
        {children}
      </body>
    </html>
  );
}
