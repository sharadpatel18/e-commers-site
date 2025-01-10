import React from "react";
import Video from "../../assets/bg2.mp4";
import Navbar from "./Navbar"; // Import Navbar
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full -z-10"
      >
        <source src="https://drive.google.com/uc?export=view&id=1LgbUfRMwkDrDgOxH4u-y-EtqPbLwif63" type="video/mp4" />
      </video>

      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
