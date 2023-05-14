import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import HeroImage from "../../assets/img/heroImage.png";

function Hero() {
  return (
    <div
      id="home"
      className="flex items-center smartphone:flex-col smartphone:gap-5 smartphone:justify-center  justify-around tablet:px-10 tablet:gap-10 smartphone:px-2 px-30 relative h-[595px] bg-white font-primary text-primary "
    >
      <div className="w-1/3 h-3/5 relative tablet:w-[350px] tablet:h-[320px] smartphone:w-[250px] smartphone:h-[250px]">
        <Image
          src={HeroImage}
          fill
          sizes="70vw"
          className=" rounded-br-[120px] tablet:rounded-[40px]"
        />
      </div>

      <div className="flex flex-col gap-y-1">
        <h1 className="smartphone:text-xl tablet:text-3xl text-4xl font-special font-bold ">
          Desenvolvedor Front-end
        </h1>
        <p className="font-light smartphone:text-sm">
          Olá! Eu me chamo Eduardo Souto, seja bem-vindo <br /> ao meu
          portfólio.
        </p>
        <a
          href="#projects"
          className="flex items-center font-semibold mt-7 smartphone:text-sm"
        >
          Meus Projetos <BsArrowRight className=" ml-2" />{" "}
        </a>
      </div>
      <div className="flex gap-x-14 absolute left-10 bottom-3 tablet:left-auto">
        <VscFilePdf size={28} cursor={"pointer"} color="#000" />
        <FiGithub size={28} cursor={"pointer"} color="#000" />
        <FaLinkedinIn size={28} cursor={"pointer"} color="#000" />
      </div>
    </div>
  );
}

export default Hero;
