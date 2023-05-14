"use client";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
function Navbar() {
  const [active, setAcvite] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between py-5 px-10 text-primary sticky top-0 z-10 bg-white tablet:px-2">
        <span className="font-special text-3xl font-bold">
          Edu.<span className="text-orange">dev</span>
        </span>
        <nav className="tablet:hidden ">
          <ul className="text-base flex justify-center align-center gap-x-16">
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
        <nav className="hidden relative tablet:inline-block ">
          {active ? (
            <VscClose
              size={30}
              onClick={() => {
                setAcvite(false);
              }}
            />
          ) : (
            <CiMenuFries
              color="#363636"
              size={30}
              onClick={() => {
                setAcvite(true);
              }}
            />
          )}
          <ul
            className={`${
              active ? "flex" : "hidden"
            } text-base flex-col gap-1 absolute top-12 -right-3 w-28 z-10 bg-white p-4`}
          >
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
