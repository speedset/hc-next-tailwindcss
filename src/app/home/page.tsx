import Link from "next/link";
import HeaderHome from "@/ui/header-home"

export default function Home() {
  return (
    <div className="flex flex-1 flex-col w-full h-full overflow-y-auto overflow-x-hidden">
      <HeaderHome />
      <main className="flex flex-1 h-full w-full bg-yellow-200">
        CULO
      </main>
    </div>
  );
}