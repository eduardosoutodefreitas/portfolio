import portfolioProjects from "@/constants/portfolioProjects";

import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-40 py-20 text-primary font-primary">
      <p className="font-semibold text-xl font-special">
        Feito com <span className="line-through">amor</span> um{" "}
        <span className="text-orange">teclado</span>
      </p>
      <h2 className="font-bold font-special text-4xl mt-3 mb-10 ">Projetos</h2>
      <div className="flex flex-col justify-between min-h-[1200px]">
        {portfolioProjects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}
