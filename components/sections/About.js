// Components and assets
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import AboutImage from "../../assets/img/AboutImage.png";
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
      className=" bg-gray-100 font-primary text-primary tablet:px-20 smartphone:px-5 px-40 py-20 flex flex-col items-start justify-evenly relative"
    >
      <div className="flex justify-between items-center my-7 w-full">
        <div>
          <p className="font-semibold text-xl">Saiba mais</p>
          <h2 className="font-bold text-4xl my-3 mb-6">
            Sobre <span className="text-orange">Mim</span>
          </h2>
          <blockquote className="border-l-8 w-7/12 tablet:w-full text-center border-orange relative pl-5">
            <ImQuotesLeft className="absolute top-0 left-1" size={12} />
            <q className="before:content-['']  after:content-[''] text-sm">
              Sorte é o que acontece quando a preparação encontra a oportunidade
            </q>
            <ImQuotesRight className="absolute bottom-0 -right-5" size={12} />
          </blockquote>
        </div>
        <Image
          src={AboutImage}
          width={260}
          height={260}
          className="tablet:hidden"
        />
      </div>
      <div className="flex justify-between items-start gap-20 tablet:flex-col tablet:justify-center tablet:items-center tablet:gap-8 ">
        <div>
          <h3 className="font-semibold text-2xl mb-3">E ai!</h3>
          <p className="text-lg font-light mb-3">
            Eu sou o Edu, um desenvolvedor apaixonado por tornar ideias em
            aplicações escaláveis de uso intuitivo e suave.
          </p>
          <p className=" text-lg font-light">
            Com foco e disciplina, busco aprender rapidamente as tendências do
            mercado e me aprofundar em tecnologias poderosas para aumentar o
            valor que posso agregar.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-2xl mb-3">Skills</h3>
          <div className="flex gap-3 flex-wrap ">
            {techStack.map((tech) => (
              <Tech tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
