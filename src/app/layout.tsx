import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ilio - Big Data for Big Success",
  description: "Data analytics and visualization services for your business growth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
