import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import HeroImage from "../../assets/img/heroImage.png";

function Hero() {
  return (
    <div className="flex items-center justify-center gap-x-24 relative h-[595px] bg-white font-primary text-primary ">
      <Image
        src={HeroImage}
        width={350}
        height={350}
        className=" rounded-br-[120px]"
      />
      <div className="flex flex-col gap-y-1">
        <h1 className="text-4xl font-special font-bold ">
          Desenvolvedor Front-end
        </h1>
        <p className="font-light text-lg">
          Olá! Eu me chamo Eduardo Souto, seja bem-vindo <br /> ao meu
          portfólio.
        </p>
        <a href="#" className="inline-block font-semibold mt-7">
          Meus Projetos <BsArrowRight className="inline-block ml-2" />{" "}
        </a>
      </div>
      <div className="flex gap-x-14 absolute left-10 bottom-3 ">
        <VscFilePdf size={28} cursor={"pointer"} color="#000" />
        <FiGithub size={28} cursor={"pointer"} color="#000" />
        <FaLinkedinIn size={28} cursor={"pointer"} color="#000" />
      </div>
    </div>
  );
}

export default Hero;
