import type { Metadata } from "next";

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
    <div className="min-h-screen px-4 text-white">
      {children}
    </div>
  );
}
