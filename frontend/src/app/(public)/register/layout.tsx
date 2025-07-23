import type { Metadata } from "next";

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
    <div className="min-h-screen px-4 text-white">
      {children}
    </div>
  );
}
