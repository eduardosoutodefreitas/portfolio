import { RiMoonClearFill } from "react-icons/ri";
function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between py-5 px-10 text-primary sticky top-0 z-10 bg-clip-padding backdrop-filter backdrop-blur-sm  ">
        <span className="font-special text-3xl font-bold">
          Edu.<span className="text-orange">dev</span>
        </span>
        <nav>
          <ul className="text-base flex justify-center align-center gap-x-24">
            <li>
              <a href="#home">Home</a>{" "}
            </li>
            <li>
              <a href="#about">Sobre mim</a>{" "}
            </li>
            <li>
              <a href="#projects">Projetos</a>{" "}
            </li>
            <li>
              <a href="#contact">Contato</a>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
