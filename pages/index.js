import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <SideNav />
      <Footer />
    </>
  );
}
