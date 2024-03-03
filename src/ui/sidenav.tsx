import Link from "next/link"
import {CalendarIcon, AcademicCapIcon, ArrowLeftIcon} from "@heroicons/react/24/outline"

export default function SideNav() {
  return (
    <aside className="flex min-h-screen w-64 max-md:w-20 text-neutral-300 flex-col overflow-y-hidden bg-stone-800 duration-300 ease-linear ">
    <header className="flex items-center justify-between py-6 px-2 border-b border-green-600">
      <div className="flex items-center gap-2 w-full">        
        <AcademicCapIcon className="w-7 h-7"/>
        <h1 className="text-lg">Hover Catering</h1>
      </div>
      <button className="flex align-middle">
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
    </header>
    <main className="no-scrollbar flex flex-col h-full overflow-y-auto duration-300 ease-linear">
      <nav className="mt-5 px-4 py-4">
        <ul className="mb-6 flex flex-col gap-1.5">
          <li>
            <a className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-green-600 text-stone-100"
              href="">              
              <CalendarIcon className="w-6 h-6" />
              Calendar
            </a>
          </li>
        </ul>
      </nav>
    </main>
    <footer className="flex border-t border-green-600 h-10 w-full"></footer>
  </aside>
  )
}