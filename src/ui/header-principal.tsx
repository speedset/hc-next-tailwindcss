import { AcademicCapIcon } from "@heroicons/react/24/outline"

export default function HeaderPrincipal() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gray-50">
      <div className="flex flex-row font-medium  text-stone-700 items-center justify-between relative w-full bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5">
        <div className="flex items-center gap-2">
          <AcademicCapIcon className="w-8 h-8" />
          <h1 className="text-2xl">Hover Catering</h1>
        </div>
        <ul className="flex items-center text-stone-700 ">
          <li className="flex items-center px-2 py-2 h-full "><a href="" className=" px-6 py-2 rounded-lg hover:bg-stone-200">Login</a></li>
          <li className="flex items-center px-2 py-2 h-full "><a href="" className=" px-6 py-2 rounded-lg hover:bg-stone-200">Registrate</a></li>
        </ul>
      </div>
    </div>
  )
}