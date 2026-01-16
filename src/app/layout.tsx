import type { Metadata } from "next";
import "./globals.css";
import ConsultationModal from "@/components/ui/ConsultationModal";
import Navbar from "@/components/navbar";


export const metadata: Metadata = {
  title: "TechFyra - Big Data for Big Success",
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
        <Navbar/>
        {children}
        <ConsultationModal />
      </body>
    </html>
  );
}
