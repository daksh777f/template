
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
