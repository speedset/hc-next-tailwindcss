import Image from "next/image"
import TogleDark from "./togle-dark"
import DropdownPerfil from "./dropdown-perfil"
import { ChatBubbleOvalLeftIcon, BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function HeaderHome(){
  return (
    <header className="sticky top-0 flex w-full h-24 bg-stone-100 shadow-md drop-shadow-1">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <form action="https://formbold.com/s/unique_form_id" method="POST">
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2">              
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
            <input placeholder="Type to search..." className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125" type="text" />
          </div>
        </form>
      </div>
      <div className="flex items-center gap-3 ">
        <ul className="flex items-center h-full gap-2">
          <li>
          <TogleDark />
          </li>
          <li>
            <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-stone-200 group">
              <BellIcon className="text-stone-500 w-5 h-5 group-hover:text-green-500"/>
            </button>
          </li>
          <li>
            <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-stone-200 group">              
              <ChatBubbleOvalLeftIcon  className="text-stone-500 w-5 h-5 group-hover:text-green-500"/>
            </button>
          </li>
        </ul>
        <div className="flex items-center h-24">
          <span className="flex h-12 w-12 rounded-full">
            <Image src="/img/user-01.png" width={100} height={100} alt="User" />
          </span>
          <DropdownPerfil />       
        </div>
      </div>

    </header>
  )
}