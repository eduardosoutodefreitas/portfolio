import { RiMoonClearFill } from "react-icons/ri";
function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between py-5 px-10 text-primary sticky top-0 z-10 bg-clip-padding backdrop-filter backdrop-blur-sm  ">
        <span className="font-special text-3xl font-bold">
          Edu.<span className="text-orange">dev</span>
        </span>
        <nav className="flex-1">
          <ul className="text-base flex justify-center align-center gap-x-24">
            <li>
              <a href="#">Home</a>{" "}
            </li>
            <li>
              <a href="#">Sobre mim</a>{" "}
            </li>
            <li>
              <a href="#">Projetos</a>{" "}
            </li>
            <li>
              <a href="#">Contato</a>{" "}
            </li>
          </ul>
        </nav>
        <RiMoonClearFill cursor={"pointer"} size={35} />
      </header>
    </>
  );
}

export default Navbar;
