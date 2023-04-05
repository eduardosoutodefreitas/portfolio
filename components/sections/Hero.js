import Image from "next/image";
import HeroImage from "../../assets/img/heroImage.png";
import { RiLinkedinFill } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { AiOutlineFileText } from "react-icons/ai";
import ButtonIcon from "../Icon";

function Hero() {
  return (
    <div className="flex items-center justify-center relative h-[600px]">
      <div className="h-56 flex flex-col justify-between items-center absolute top-10 left-5">
        <ButtonIcon icon={<AiOutlineFileText size={30} color="white" />} />
        <ButtonIcon icon={<RiLinkedinFill size={30} color="white" />} />
        <ButtonIcon icon={<RiGithubLine size={30} color="white" />} />
      </div>{" "}
      <div className="text-center">
        <Image
          src={HeroImage}
          width={300}
          height={300}
          className="shadow-lg rounded-full"
        />
        <h1 className="text-xl font-serif font-bold py-2">Eduardo Souto</h1>
        <p className="font-sans font-light text-2xl">Desenvolvedor Front-end</p>
      </div>
    </div>
  );
}

export default Hero;
