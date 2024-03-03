import Link from "next/link";
import HeaderHome from "@/ui/header-home"

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-auto ">
      <HeaderHome />
      <main className="flex flex-col h-full w-full bg-yellow-200">
      <section className="flex h-52 w-full items-center bg-red-400"></section>
      <section className="flex h-52 w-full items-center bg-green-400"></section>
      <section className="flex h-52 w-full items-center bg-red-400"></section>
      <section className="flex h-52 w-full items-center bg-green-400"></section>
      </main>
    </div>
  );
}