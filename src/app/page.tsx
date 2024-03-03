import HeaderPrincipal from "@/ui/header-principal";
import Link from "next/link";

export default function Index() {
  return (
    <div className="flex flex-col flex-grow w-full overflow-auto">  
    <HeaderPrincipal />
    <main className="flex flex-col flex-1 h-full bg-yellow-300 ">
      <section className="flex h-52 w-full items-center bg-red-400"></section>
      <section className="flex h-52 w-full items-center bg-green-400"></section>
      <section className="flex h-52 w-full items-center bg-red-400"></section>
      <section className="flex h-52 w-full items-center bg-green-400"></section>
    </main>
    <footer className="flex h-12 w-full bg-blue-300"></footer>
    </div>
  );
}
