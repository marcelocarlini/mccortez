import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import portfolioImage from "../img/1.png";
import todoImage from "../img/2.png";
import masterImage from "../img/3.png";
import relogioImage from "../img/4.png";
import menuImage from "../img/5.png";
import barberImage from "../img/6.png";

export function Projects() {
  const projects = [
    {
      title: "Portfólio",
      description: "React Js + TS + Tailwind CSS",
      image: portfolioImage,
      link: "https://mccortez.vercel.app/",
      colSpan: "col-span-1",
    },
    {
      title: "Lista de Tarefas",
      description: "React JS",
      image: todoImage,
      link: "https://todo-jet-beta.vercel.app/",
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      title: "Master Chefe",
      description: "React JS + ChatGPT OpenAI",
      image: masterImage,
      link: "https://masterchefapp.netlify.app/",
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      title: "Relogio Digital",
      description: "HTML + CSS + JS",
      image: relogioImage,
      link: "https://relogio-digital-beryl.vercel.app/",
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      title: "Menu Responsivo",
      description: "HTML + CSS + JS",
      image: menuImage,
      link: "https://menu-responsivo-nine.vercel.app/",
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      title: "Barbearia Barber",
      description: "HTML + CSS + SASS",
      image: barberImage,
      link: "https://barber-kappa-three.vercel.app/#",
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
              Alguns dos projetos pessoais que já realizei ao longo da minha
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
