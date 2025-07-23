import type { Metadata } from "next";

import DashboardHeader from "@/app/components/Dashboard/DashboardHeader";

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
    <div className="h-screen text-black flex flex-col">
      <DashboardHeader />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
