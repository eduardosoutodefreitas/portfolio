import Image from "next/image";

// Components and assets
import { Subtitle, Title } from "@/components/CustomTitles";
import AboutImage from "../../assets/img/aboutImage.png";
import Tech from "../Tech";

const techStack = [
  "html",
  "typescript",
  "material ui",
  "css",
  "react",
  "tailwindcss",
  "javascript",
  "nextjs",
  "Styled Components",
];
export default function About() {
  return (
    <div className="h-[600px] flex justify-center items-center gap-x-20">
      <div>
        <Image
          src={AboutImage}
          width={350}
          height={350}
          className="shadow-lg rounded-full"
        />
      </div>
      <div className="w-1/2 ">
        <div>
          <Title>Sobre mim</Title>
          <p className="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centur
          </p>
        </div>
        <div className="mt-6">
          <Subtitle>Skills</Subtitle>
          <ul className="grid grid-flow-col grid-rows-3 gap-3 mt-4">
            {techStack.map((tech) => (
              <li className=" uppercase text-sm font-sans text-zinc-900">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
