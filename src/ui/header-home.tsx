import Image from "next/image"

export default function HeaderHome(){
  return (
    <header className="sticky top-0 flex w-full h-24 bg-stone-100 shadow-md drop-shadow-1">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <form className="bg-yellow-100" action="https://formbold.com/s/unique_form_id" method="POST">
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <input placeholder="Type to search..."
              className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125" type="text" />
          </div>
        </form>
      </div>
      <div className="flex items-center gap-3 ">
        <ul className="flex items-center h-full bg-yellow-300 gap-2">
          <li className="flex">
           
          </li>
          <li>
            <a className="relative flex h-8 w-8 items-center justify-center rounded-full border-stone-500 border-[1px] bg-gray group"
              href="#">
              <svg className="fill-stone-500 duration-300 ease-in-out w-5 h-5 group-hover:fill-green-500"
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1999 14.9343L15.6374 14.0624C15.5249 13.8937 15.4687 13.7249 15.4687 13.528V7.67803C15.4687 6.01865 14.7655 4.47178 13.4718 3.31865C12.4312 2.39053 11.0812 1.7999 9.64678 1.6874V1.1249C9.64678 0.787402 9.36553 0.478027 8.9999 0.478027C8.6624 0.478027 8.35303 0.759277 8.35303 1.1249V1.65928C8.29678 1.65928 8.24053 1.65928 8.18428 1.6874C4.92178 2.05303 2.4749 4.66865 2.4749 7.79053V13.528C2.44678 13.8093 2.39053 13.9499 2.33428 14.0343L1.7999 14.9343C1.63115 15.2155 1.63115 15.553 1.7999 15.8343C1.96865 16.0874 2.2499 16.2562 2.55928 16.2562H8.38115V16.8749C8.38115 17.2124 8.6624 17.5218 9.02803 17.5218C9.36553 17.5218 9.6749 17.2405 9.6749 16.8749V16.2562H15.4687C15.778 16.2562 16.0593 16.0874 16.228 15.8343C16.3968 15.553 16.3968 15.2155 16.1999 14.9343ZM3.23428 14.9905L3.43115 14.653C3.5999 14.3718 3.68428 14.0343 3.74053 13.6405V7.79053C3.74053 5.31553 5.70928 3.23428 8.3249 2.95303C9.92803 2.78428 11.503 3.2624 12.6562 4.2749C13.6687 5.1749 14.2312 6.38428 14.2312 7.67803V13.528C14.2312 13.9499 14.3437 14.3437 14.5968 14.7374L14.7655 14.9905H3.23428Z"
                  fill=""></path>
              </svg>
            </a>
          </li>
          <li>
            <a className="relative flex h-8 w-8 items-center justify-center rounded-full border-stone-500 border-[1px] bg-gray group"
              href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="text-stone-500 w-5 h-5 group-hover:text-green-500">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="flex items-center h-24 bg-red-200">
          <span className="flex h-12 w-12 rounded-full">
            <Image src="/img/user-01.png" width={100} height={100} alt="User" />
          </span>
          {/*-------------- INICIO DROPDOWN PERFIL --------------*/}
          {/*----------------------------------------------------*/}
          <div className="bg-gray-100 flex items-center justify-center">
            <div className=" relative inline-block text-left">
              <button id="dropdown-button"
                className="inline-flex justify-center w-full h-full text-sm font-medium text-gray-700 bg-white ">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>
              <div id="dropdown-menu"
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                  <a className="flex  rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                    role="menuitem">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="light" width="18px" className="mr-2">
                      <path
                        d="M19 9.199h-.98c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799 0-.441-.449-.801-1-.801zM10 4.5A5.483 5.483 0 0 0 4.5 10c0 3.051 2.449 5.5 5.5 5.5 3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5zm0 9.5c-2.211 0-4-1.791-4-4 0-2.211 1.789-4 4-4a4 4 0 0 1 0 8zm-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799zm7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1zm0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1 .441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1zm7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143l.699-.699zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142zm.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273l-.699-.7zm11.769 14.031l.7.699c.391.391.96.453 1.272.143.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273z">
                      </path>
                    </svg> Light
                  </a>
                  <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                    role="menuitem">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="moon" width="18px" className="mr-2">
                      <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z">
                      </path>
                    </svg> Dark
                  </a>
                  <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                    role="menuitem">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="mr-2" viewBox="0 0 32 32" id="desktop">
                      <path
                        d="M30 2H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h9.998c-.004 1.446-.062 3.324-.61 4h-.404A.992.992 0 0 0 10 29c0 .552.44 1 .984 1h10.03A.992.992 0 0 0 22 29c0-.552-.44-1-.984-1h-.404c-.55-.676-.606-2.554-.61-4H30a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM14 24l-.002.004L14 24zm4.002.004L18 24h.002v.004zM30 20H2V4h28v16z">
                      </path>
                    </svg> System
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* FINAL DROPDOWN PERFIL */}
        </div>
      </div>

    </header>
  )
}