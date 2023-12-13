import { HiDownload } from "react-icons/hi";
export function Hero() {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "./public/images/curriculo.pdf";
    downloadLink.download = "curriculo.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <section className="bg-gradient-to-tr from-black to-gray-900 text-white">
      <div className="container mx-auto max-w-4x1 p-2 py-12 flex flex-col md:flex-row">
        <div className="basis-1/2">
          <h1 className="mb-6 text-center md:text-left">
            <span className="font-handwriting block text-3xl text-center md:text-left">
              Olá, me chamo
            </span>
            <span className="font-headlinetext text-5xl font-semibold">
              Marcelo
            </span>
            <span className="font-headlinetext text-5xl font-light text-blue-400">
              Cortez
            </span>
          </h1>
          <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
            <div className="h-1 w-12 roudend-full bg-blue-800" />
            Desenvolvedor React.js Front-end
          </h2>
          <p className="text-gray-400 my-6 text-center md:text-left">
            Decolando na Carreira: Desenvolvedor Front-end React em Início de
            Jornada Rumo à Excelência Digital.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <a
              href="#"
              className="button text-gray-600 hover:text-gray-900 flex items-center gap-2"
              onClick={handleDownload}
            >
              <HiDownload />
              Baixe meu CV
            </a>
          </div>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </section>
  );
}
