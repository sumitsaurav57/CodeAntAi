"use client";
import Image from "next/image";
import React, { useState } from "react";
import companyLogo from "../assets/codeantai.png";
import azureLogo from "../assets/azure.png";
import bitbucketLogo from "../assets/bitbucket.png";
import githubLogo from "../assets/github.png";
import gitlabLogo from "../assets/gitlab.png";
import keyLogo from "../assets/key.png";
import chartLogo from "../assets/chart.png";
import arrowLogo from "../assets/arrow.png";
import subtractLogo from "../assets/Subtract.png";

import localFont from 'next/font/local';


const InterFont = localFont({
  src: "../fonts/Inter.ttf"
});

const SatoshiFont = localFont({
  src: "../fonts/Satoshi.ttf"
});


const page = () => {
  const [type, setType] = useState("SAAS");

  const handleClick = (preference) => {
    if (preference == "SAAS") {
      setType("SAAS");
    } else {
      setType("SELFHOSTED");
    }
  };
  return (
    <div>
      <div className={`grid md:grid-cols-2 grid-cols-1 h-screen w-screen ${InterFont.className} bg-slate-50`}>
        <div className="bg-white hidden md:flex overflow-hidden">
          <div className="h-full w-full border-r-2 flex relative justify-center items-center border-gray-300">
            <div className="absolute left-0 bottom-0"><Image src={subtractLogo} height={300} alt="subtract logo"/></div>
            <div className="w-8/12 absolute rounded-3xl shadowCard -translate-y-14">
              <div className="flex items-center  p-5 gap-5 border-b-2 border-gray-300 ">
                <div>
                  <Image height={30} src={companyLogo} alt="comapanyLogo" />
                </div>
                <div className="font-bold text-lg">
                  AI to Detect and Autofix Bad Code
                </div>
              </div>
              <div className="p-5 w-full flex justify-between items-center">
                <div className="flex justify-center items-center flex-col">
                  <div className="font-bold">30+</div>
                  <div>Language Support</div>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <div className="font-bold">10K+</div>
                  <div>Developers</div>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <div className="font-bold">100K+</div>
                  <div >Hours Saved</div>
                </div>
              </div>
            </div>
            <div className="absolute p-5 w-[265px] h-[164px] gap-5 flex flex-col bg-white rounded-3xl shadowCard translate-x-28 translate-y-24">
              <div className="flex w-full items-center justify-between">
                <div>
                  <Image height={50} src={chartLogo} alt="chartlogo" />
                </div>
                <div>
                  <div className="flex items-center"><div><Image src={arrowLogo} alt="arrowlogo"/></div><div style={{color:"rgba(0, 73, 198, 1)"}}>14%</div></div>
                  <div className="text-xs font-thin">This Week</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold">Issuses Fixed</div>
                <div className="text-3xl font-bold">500K+</div>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex flex-col justify-center  items-center">
          <div className=" bg-white border-2 border-gray-300 h-4/5 w-4/5 rounded-lg shadow-lg">
            <div className="w-full flex flex-col justify-center items-center border-b-2 border-gray-300">
              <div className="flex text-xl justify-center items-end gap-3 p-5">
                <div>
                  <Image
                    height={30}
                    width={30}
                    src={companyLogo}
                    alt="compnyLogo"
                  />
                </div>
                <div className={`${SatoshiFont.className}`}>CodeAnt AI</div>
              </div>
              <div className="text-2xl font-semibold">Welcome to CodeAntAi</div>
              <div className="w-full flex justify-center py-5">
                <div className="w-4/5 flex">
                  <div
                    className={`w-1/2 flex justify-center border-2 py-3   rounded-lg ${
                      type == "SAAS"
                        ? "buttonBlue border-blue-700 text-white"
                        : "bg-white border-gray-300 text-black"
                    }`}
                    onClick={() => handleClick("SAAS")}
                  >
                    SAAS
                  </div>
                  <div
                    className={`w-1/2 flex justify-center border-2 py-3  rounded-lg ${
                      type == "SELFHOSTED"
                        ? "buttonBlue border-blue-700 text-white"
                        : "bg-white border-gray-300 text-black"
                    }`}
                    onClick={() => handleClick("SELFHOSTED")}
                  >
                    Self Hosted
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  p-5 ">
              {type == "SAAS" ? <SAAS /> : <SELFHOSTED />}
            </div>
          </div>
          <div className="flex gap-2 p-5"><div>By Signing Up you agree to the </div><div className="font-semibold">Privacy Problem</div></div>
        </div>
      </div>
    </div>
  );
};

function SAAS() {
  return (
    <div className="w-full flex flex-col h-full gap-3  justify-center items-center">
      <div className="flex md:w-3/5 w-11/12 justify-center border-2 py-3 border-gray-300 rounded-lg items-center gap-2">
        <div className="flex">
          <Image height={20} width={20} src={githubLogo} alt="githubLogo" />
        </div>
        <div>GitHub</div>
      </div>
      <div className="flex w-11/12  md:w-3/5 justify-center border-2 py-3 border-gray-300 rounded-lg items-center gap-2">
        <div className="flex">
          <Image
            height={20}
            width={20}
            src={bitbucketLogo}
            alt="bitbucketLogo"
          />
        </div>
        <div>BitBucket</div>
      </div>
      <div className="flex md:w-3/5 w-11/12 justify-center border-2 py-3  border-gray-300 rounded-lg items-center gap-2">
        <div className="flex">
          <Image height={20} width={20} src={azureLogo} alt="azureLogo" />
        </div>
        <div>Azure Devops</div>
      </div>
      <div className="flex md:w-3/5 w-11/12 justify-center border-2 py-3 border-gray-300 rounded-lg items-center gap-2">
        <div className="flex">
          <Image height={20} width={20} src={gitlabLogo} alt="gitlabLogo" />
        </div>
        <div>Gitlab</div>
      </div>
    </div>
  );
}
function SELFHOSTED() {
  return (
    <div className="w-full flex flex-col h-full gap-3  justify-center items-center">
      <div className="flex md:w-3/5 w-11/12 justify-center border-2 py-3 border-gray-300 rounded-lg items-center gap-2">
        <div className="flex">
          <Image height={20} width={20} src={gitlabLogo} alt="gitlabLogo" />
        </div>
        <div>GitHub</div>
      </div>
      <div className="flex md:w-3/5 w-11/12 justify-center border-2 py-3 border-gray-300 rounded-lg items-center gap-2">
        <div className="flex">
          <Image height={20} width={20} src={keyLogo} alt="keytLogo" />
        </div>
        <div>SSO</div>
      </div>
    </div>
  );
}

export default page;
