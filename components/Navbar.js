import { RiMoonClearLine } from "react-icons/ri";
function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between py-5 px-10">
        <nav className="flex-1">
          <ul className="text-xl flex justify-center align-center gap-x-24">
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
        <RiMoonClearLine size={30} />
      </header>
    </>
  );
}

export default Navbar;
