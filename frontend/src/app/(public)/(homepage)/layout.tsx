import type { Metadata } from "next";

import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: "GlossaryUP",
  description: "GlossaryUP is a platform for students to refine their skills and knowledge.",
};

export default function HomepageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-black md:pt-5">
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  );
}
