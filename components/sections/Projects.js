import portfolioProjects from "@/constants/portfolioProjects";

import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="p-40 text-primary font-primary tablet:px-20 "
    >
      <p className="font-semibold text-xl font-special">
        Feito com <span className="line-through">amor</span> um{" "}
        <span className="text-orange">teclado</span>
      </p>
      <h2 className="font-bold font-special text-4xl mt-3 mb-10 ">Projetos</h2>
      <div className="flex flex-col items-center gap-20">
        {portfolioProjects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}
