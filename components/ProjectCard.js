import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import exampleProject from "../assets/img/exampleProject.png";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Tech from "./Tech";
function ProjectCard({ project }) {
  return (
    <div className=" flex justify-between tablet:flex-col tablet:gap-10 tablet:items-center tablet:justify-center">
      <Image
        src={exampleProject}
        alt={project.name}
        className="rounded-sm shadow-lg tablet:w-full w-6/12"
      />

      <div className="flex flex-col justify-around w-5/12 tablet:w-full">
        <div>
          <h2 className="text-2xl font-bold font-special tablet:font-3xl">
            {project.name}
          </h2>
          <p className="my-4">{project.description}</p>
          <h3 className="font-semibold">Usei neste projeto:</h3>
          <div className="flex flex-wrap gap-3 my-2 tablet:mb-5">
            {project.techStack.map((tech) => (
              <Tech tech={tech} />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center w-2/3 tablet:w-full">
          <CustomButton Icon={AiFillGithub} children={"Código"} fill={true} />
          <CustomButton Icon={FiExternalLink} children={"Demo"} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
