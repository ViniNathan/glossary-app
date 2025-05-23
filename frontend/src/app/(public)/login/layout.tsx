import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "GlossaryUP - Login",
  description: "GlossaryUP is a platform for students to refine their skills and knowledge.",
};

export default function LoginLayout({
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
