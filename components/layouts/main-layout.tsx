import React from "react";
import Navbar from "../ui/navbar/navbar.client";
import Footer from "../ui/footer/footer";
import Style from "./style";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-pink-50 to-purple-50 overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
      <Style />
    </div>
  );
}
