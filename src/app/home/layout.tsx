import SideNav from "@/ui/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideNav />
      <>{children}</>
    </>
  );
}