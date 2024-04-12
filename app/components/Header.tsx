'use client'
import Link from "next/link";
import { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { IoSearch } from "react-icons/io5";



export default function Header() {
  const [active, setActive] = useState(false);

  return (
    <nav className="flex bg-[#333] justify-items-center items-center justify-between text-white">
      <div className="p-2 mx-4 my-2 w-1/2">
        <h1 className="text-3xl font-bold">Weather Forcast</h1>
      </div>
      <ul className="flex gap-6 font-semibold text-xl p-2 w-1/4 justify-center">
        <li >
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href="/weather">Weather</Link>
        </li>
      </ul>
      <div className="flex items-center bg-white p-2 rounded text-black">
        <input
          type="text"
          className="outline-none"
        />
        <IoSearch />
      </div>
      <button className="flex justify-center items-center gap-1 w-1/4">
        Light
        <MdLightMode />
      </button>
    </nav>
  );
}