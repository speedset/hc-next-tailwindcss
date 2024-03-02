"use client"

import { ChevronDownIcon, ChevronUpIcon, UserIcon, Cog6ToothIcon, PowerIcon } from "@heroicons/react/24/outline"
import Link from "next/link";
import { useState } from "react";

export default function DropdownPerfil() {
 const [click, setClick] = useState(false);

 const handleClickAndHover = () => {
  setClick(!click)
 }

 const handleHover = () => {
  setClick(false)
 }

 return (
  <div onMouseLeave={handleHover} className="relative inline-block w-7 h-full text-left bg-stone-100">
   <button onClick={handleClickAndHover} className="h-full w-full hover:bg-stone-200">
    {click ? <ChevronUpIcon className="w-5 h-5 m-auto" /> : <ChevronDownIcon className="w-5 h-5 m-auto" />}
   </button>
   {click &&
    <div className="divide-y divide-gray-100 origin-top-right absolute right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
     <ul className="p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
      <li className="flex rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-stone-200 active:bg-blue-100 cursor-pointer">
       <Link className="flex justify-start h-full w-full" href={"home/profile"}>
        <UserIcon className="mr-2 w-5 h-5" />
        Perfil
       </Link>
      </li>
      <li className="flex rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-stone-200 active:bg-blue-100 cursor-pointer">
       <Link className="flex justify-start h-full w-full" href={"home/settings"}>
        <Cog6ToothIcon className="mr-2 w-5 h-5" />
        Configuración
       </Link>
      </li>
     </ul>
     <div className="p-2" >
      <div className="flex rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-stone-200 active:bg-blue-100 cursor-pointer">
       <Link className="flex justify-start h-full w-full" href={"home/logout"}>
        <PowerIcon className="mr-2 w-5 h-5" />
        Logout
       </Link>
      </div>
     </div>
    </div>
   }
  </div>


 )
}