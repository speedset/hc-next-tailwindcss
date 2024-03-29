import HeaderPrincipal from "@/ui/header-principal";
import LoginForm from "@/ui/login-form";

export default function Login() {

  return (<div className="flex flex-col flex-grow w-full overflow-auto">
    <HeaderPrincipal />
    <main className="flex flex-col flex-1 h-full bg-yellow-300 ">
     <LoginForm />
    </main>
    <footer className="flex h-12 w-full bg-blue-300"></footer>
  </div>)
}