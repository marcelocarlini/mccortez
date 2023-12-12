import MinhaImagem from "../img/eu.jpg";

export function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="relative p-4 text-center ">
        <h2 className="relative text-blue-900 font-bold z-10 ">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text 4xl">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Olá! Sou um cara apaixonado por tecnologia, formado em Análise e
          Desenvolvimento de Sistemas. Embora eu ainda não tenha trabalhado
          profissionalmente como desenvolvedor, tenho conhecimento sólido em
          teoria e alguma prática em tecnologias como React, PHP, Laravel, HTML,
          CSS, Bootstrap e Tailwind. Além disso, sei lidar com MySQL para
          gerenciamento de bancos de dados.
        </p>
        <div className="absolute left-1/2 top-3 z-0 h-10 rounded-lg bg-blue-100/40" />
      </div>
      <div className="mx-auto mt-20 max-w-lg">
        <div className=" relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">
          <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-fold">Olá,</p>
            <p>
              <span className="mr-1">Meu nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                Marcelo Cortez
              </span>
            </p>
            <table className="mt-4 w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Idade:
                  </td>
                  <td>34</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Celular:
                  </td>
                  <td>31-99439-6945</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    <a
                      href="mailto:marcelocarlini@hotmail.com"
                      className="underline hover:text-blue-800"
                    >
                      {" "}
                      marcelocarlini@hotmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </td>
                  <td>Belo Horizonte - MG</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 md:-left-12 md:-top-12 md:h-72 md:w-56"
            style={{
              backgroundImage: `url(${MinhaImagem})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
