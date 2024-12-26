 'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-white">
     <div className="flex gap-3"><div className="bg-black  rounded-lg py-3 px-4"><Link href="/dashboard">Repository Screen</Link></div><div className="rounded-lg bg-black py-3 px-4"><Link href='/signIn'> LogIn Screen</Link></div></div>
    </div>
  );
} 
