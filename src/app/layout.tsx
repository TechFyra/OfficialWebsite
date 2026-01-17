import type { Metadata } from "next";
import "./globals.css";
import ConsultationModal from "@/components/ui/ConsultationModal";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "TechFyra - Seamless Connection For Better Tomorrow",
  description:
    "TechFyra delivers automation, web development, data analytics, data visualization, and ML solutions for scalable business growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Navbar />
        {children}
        <ConsultationModal />
      </body>
    </html>
  );
}
