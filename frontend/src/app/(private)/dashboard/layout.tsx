import type { Metadata } from "next";

import DashboardHeader from "@/app/components/Dashboard/DashboardHeader";

import "../../globals.css";

export const metadata: Metadata = {
  title: "GlossaryUP - Dashboard",
  description: "GlossaryUP is a platform for students to refine their skills and knowledge.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="overflow-x-hidden h-screen w-screen bg-bg text-black flex flex-col"
      >
        <DashboardHeader />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
