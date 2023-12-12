import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import portfolioImage from "../img/1.png";
import todoImage from "../img/2.png";

export function Projects() {
  const projects = [
    {
      title: "Portfólio",
      description: "ReactJs e Tailwind CSS",
      image: portfolioImage,
      link: "https://marcelocarlini.github.io/react-portfolio/",
      colSpan: "col-span-1",
    },
    {
      title: "Todo",
      description: "React",
      image: todoImage,
      link: "https://marcelocarlini.github.io/todo/",
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      title: "Projeto 3",
      description: "Descrição do projeto 3",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      link: "#",
      colSpan: "col-span-1 md:col-span-1",
    },
  ];
  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Algunjs dos projetos pessoais que já realizei ao longo da minha
              trajetória como programador.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={`project-${index}`}
                className={`group relative h-52 cursos-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="aboslute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className="mb-4 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6 " />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
