import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <hr/>
      <About />
    </>
  );
}
