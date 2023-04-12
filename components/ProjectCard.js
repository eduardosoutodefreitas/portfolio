import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import exampleProject from "../assets/img/exampleProject.png";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Tech from "./Tech";
function ProjectCard({ project }) {
  return (
    <div className="flex justify-between h-[350px]">
      <Image
        src={exampleProject}
        alt={project.name}
        className="rounded-sm shadow-lg w-6/12"
      />

      <div className="flex flex-col justify-around w-5/12">
        <div>
          <h2 className="text-2xl font-bold font-special">{project.name}</h2>
          <p className="my-4">{project.description}</p>
          <h3 className="font-semibold">Usei neste projeto:</h3>
          <div className="flex flex-wrap gap-3 mt-1">
            {project.techStack.map((tech) => (
              <Tech tech={tech} />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center w-2/3">
          <CustomButton Icon={AiFillGithub} children={"Código"} fill={true} />
          <CustomButton Icon={FiExternalLink} children={"Demo"} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
