import Footer from "@/components/navbar/footer";
import React from "react";
import Header from "../../components/navbar/header";

type props = {
  children: React.ReactNode;
};
const Layout = ({ children }: props) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
