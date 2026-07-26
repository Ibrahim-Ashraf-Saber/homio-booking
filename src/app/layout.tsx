import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homio",
  description:
    "Homio is a modern vacation rental platform that lets users discover, book, and manage unique stays through a fast, secure, and intuitive experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
