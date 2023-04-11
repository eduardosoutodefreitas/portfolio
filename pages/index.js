import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />

      <Projects />
      <SideNav />
    </>
  );
}
