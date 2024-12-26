"use client";
import React, { useState } from "react";
import projects from "../data/data";
import Project from "./Project";
import Image from "next/image";
import plusLogo from "../assets/plus.png";
import refreshLogo from "../assets/refresh.png";
import searchLogo from "../assets/search.png";

import localFont from "next/font/local";
import Button from "./Button";
const InterFont = localFont({
  src: "../fonts/Inter.ttf",
});
const SatoshiFont = localFont({
  src: "../fonts/Satoshi.ttf",
});

const Projects = () => {
  const [data, setData] = useState([...projects]);
  const [search, setSearch] = useState("");
    const filteredProjects = data.filter((project) =>
      project.project_name.includes(search)
    );
  return (
    <div
      className={`  flex flex-col ${InterFont.className}  border-gray-300 border-2 md:rounded-lg bg-white`}
    >
      <div className="p-5 flex flex-col gap-3">
        <div className="flex flex-col md:flex-row justify-between gap-5md:gap-0 md:items-center">           
          <div className="flex flex-col gap-2 ">
            <div className="text-2xl font-semibold">Repositories</div>
            <div className="text-gray-700">
              {projects.length} total repositories
            </div>         
          </div>        
          <div className="flex gap-3 buttonShadow">
            <div className="flex p-2 rounded-lg gap-2 items-center border-2 border-gray-300">
              <div>
                <Image src={refreshLogo} alt="refreshLogo" />
              </div>
              <div>Refresh All</div>
            </div>
            <div
              className="flex p-2 rounded-lg gap-2 items-center "
              style={{ background: "rgba(21, 112, 239, 1)" }}
            >
              <div>
                <Image src={plusLogo} alt="addLogo" />
              </div>
              <div className="text-white">Add Repository</div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-[366px] px-3 py-4 rounded-lg buttonShadow gap-2 border border-gray-300">
        <div><Image src={searchLogo} height={20} alt="searchLogo"/></div>
          <div>
            {" "}
            <input
              type="text"
              placeholder="Search Repositories"
              className="border-0 focus:border-none focus:outline-none focus:border-0 rounded-lg"
              value={search}
              onChange={(e) =>setSearch(e.target.value.toLowerCase())}
            />
          </div>
        </div>
      </div>
      {filteredProjects.length > 0 ?
      <div> {filteredProjects.map((i, n) => (
        <Project
          key={n}
          project_name={i.project_name}
          type={i.type}
          language={i.language}
          storage={i.storage}
          created_at={i.created_at}
        />
      ))}</div>
           :<div>No result found</div>
      
    }
   
    </div>
  );
};

export default Projects;
