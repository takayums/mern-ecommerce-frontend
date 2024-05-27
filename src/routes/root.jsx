import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export default function Root() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
