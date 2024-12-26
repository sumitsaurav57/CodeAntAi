"use client";

import React, { useState } from "react";
import companyLogo from "../assets/codeantai.png";
import homeLogo from "../assets/home.png";
import codeLogo from "../assets/code.png";
import cloudLogo from "../assets/cloud.png";
import bookLogo from "../assets/book.png";
import settingsLogo from "../assets/gear.png";
import supportLogo from "../assets/phone.png";
import searchLogo from "../assets/search.png";
import barsLogo from "../assets/bars.png";
import closeLogo from "../assets/close.png";
import signInLogo from "../assets/sign-out.png";
import Image from "next/image";


import localFont from 'next/font/local';


const InterFont = localFont({
  src: "../fonts/Inter.ttf"
});

const SatoshiFont = localFont({
  src: "../fonts/Satoshi.ttf"
});

const Navbar = () => {
  const [toggle ,setToggle]=useState('close');
  const onOptionChangeHandler = () => { };
  const toggleClick=()=>{

  }
  return (
    <div className={`bg-white w-full h-full border-r-2  border-r-gray-300 ${InterFont.className}`}>
      <div className="p-5 flex flex-col  h-full">
        <div className=" flex w-full items-center justify-between">
          <div className="flex gap-3 bg-white items-end">
            {" "}
            <Image src={companyLogo} height={30} width={30} alt="logo" />{" "}
            <div className={`text-2xl font-extralight ${SatoshiFont.className}`}>Codeant Ai</div>
          </div>
          <div className="visible md:hidden">{toggle == 'close' ? <div onClick={()=>setToggle('open')}><Image src={barsLogo} height={20} alt="barlogo"/></div> : <div onClick={()=>setToggle('close')}><Image src={closeLogo} height={20} alt="closelogo"/></div> }</div>
        </div>
        <div className={`w-full ${toggle=='close'?'h-0':'h-full'} md:h-full overflow-hidden`} >
          <div className="pt-3">
            {" "}
            <select
              onChange={onOptionChangeHandler}
              className="px-3 py-2 w-full text-ellipsis text-black border-2 border-gray-300 rounded-lg"
            >
              <option className="text-ellipsis">UtkarshDhariyaPanwar</option>
            </select>
          </div>
          <div className="py-5 h-full flex flex-col justify-between ">
            <div className="flex flex-col ">
              <div
                className="rounded-lg p-3 flex items-center gap-2"
                style={{ background: "rgba(21, 112, 239, 1)" }}
              >
                <div>
                  <Image src={homeLogo} alt="homelogo" />
                </div>
                <div className="text-white">Repositories</div>
              </div>
              <div className="rounded-lg p-3 flex items-center gap-2">
                <div>
                  <Image src={codeLogo} alt="codelogo" />
                </div>
                <div className="text-gray-800">Ai Code Review</div>
              </div>
              <div className="rounded-lg p-3 flex items-center gap-2">
                <div>
                  <Image src={cloudLogo} alt="cloudlogo" />
                </div>
                <div className="text-gray-800">Cloud Security</div>
              </div>
              <div className="rounded-lg p-3 flex items-center gap-2">
                <div>
                  <Image src={bookLogo} alt="booklogo" />
                </div>
                <div className="text-gray-800">How To Use</div>
              </div>
              <div className="rounded-lg p-3 flex items-center gap-2">
                <div>
                  <Image src={settingsLogo} alt="settingslogo" />
                </div>
                <div className="text-gray-800">Settings</div>
              </div>
            </div>
            <div>
              <div className="rounded-lg p-3 flex items-center gap-2">
                <div>
                  <Image src={supportLogo} alt="booklogo" />
                </div>
                <div className="text-gray-800">Support</div>
              </div>
              <div className="rounded-lg p-3 flex items-center gap-2">
                <div>
                  <Image src={signInLogo} alt="settingslogo" />
                </div>
                <div className="text-gray-800">LogOut</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
