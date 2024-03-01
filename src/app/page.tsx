import Link from "next/link";

export default function Index() {
  return (
    <div className="flex flex-col h-screen min-h-screen w-screen overflow-hidden">  
    <header className="flex h-24 w-full bg-red-200">
      <Link href={"/home"}>home</Link>
    </header>
    <main className="flex flex-1 h-full"></main>
    <footer className="flex h-12 w-full bg-blue-300"></footer>
    </div>
  );
}
