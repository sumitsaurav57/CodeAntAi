import React from "react";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <div className="grid md:grid-cols-6 w-screen   min-h-screen relative bg-slate-50">
      <div className="md:col-span-1 z-10 w-full absolute md:relative   top-0 overflow-hidden   ">
        <Navbar />
      </div>
      <div className="col-span-5 md:p-5 top-16 relative md:top-0 ">
        {" "}
        <Projects />
      </div>
    </div>
  );
};

export default page;
