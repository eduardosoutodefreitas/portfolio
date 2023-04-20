// Components and assets
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import griddots from "../../assets/img/griddots.png";
import Tech from "../Tech";
import Image from "next/image";

const techStack = [
  "HTML 5",
  "CSS 3",
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Tailwindcss",
  "Material UI",
  "Styled Components",
  "Firebase",
  "MongoDB",
  "Figma",
  "Git",
];
export default function About() {
  return (
    <section
      id="about"
      className="h-[700px] bg-gray-100 font-primary text-primary px-40 flex flex-col items-start justify-evenly relative"
    >
      <div>
        <p className="font-semibold text-xl">Saiba mais</p>
        <h2 className="font-bold text-4xl my-3 mb-6">
          Sobre <span className="text-orange">Mim</span>
        </h2>
        <blockquote className="border-l-8 w-7/12 text-center border-orange relative">
          <ImQuotesLeft className="absolute top-0 left-1" />
          <q className="before:content-['']  after:content-[''] ">
            Sorte é o que acontece quando a preparação encontra a oportunidade
          </q>
          <ImQuotesRight className="absolute bottom-1 -right-2" />
        </blockquote>
      </div>
      <div className="flex justify-end items-start ">
        <div>
          <h3 className="font-semibold text-2xl mb-3">E ai!</h3>
          <p className="w-4/6 text-lg font-light mb-3">
            Eu sou o Edu, um desenvolvedor apaixonado por tornar ideias em
            aplicações escaláveis de uso intuitivo e suave.
          </p>
          <p className="w-4/6 text-lg font-light">
            Com foco e disciplina, busco aprender rapidamente as tendências do
            mercado e me aprofundar em tecnologias poderosas para aumentar o
            valor que posso agregar.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-2xl mb-3">Skills</h3>
          <div className="flex gap-3 flex-wrap w-5/6">
            {techStack.map((tech) => (
              <Tech tech={tech} />
            ))}
          </div>
        </div>
      </div>
      <Image
        src={griddots}
        width={200}
        height={200}
        className="absolute right-52 top-20"
      />
    </section>
  );
}
