import { useState } from "react";
import ModalEmpty from "./components/ModalEmpty";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Project from "./components/Project";
import MenuItem from "./components/MenuItem";
import Modal from "./components/Modal";
import SidebarMenu from "./components/SideBarMenu";

export function App() {
  const [project, setProject] = useState("");
  const [showModalEmpty, setShowModalEmpty] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => {
    setShowModalEmpty(false);
    setShowModal(false);
  };

  return (
    <>
      <header className="flex bg-darker border-b-2 border-blue-300 sticky top-0 z-50 w-[100%] p-2 px-4 md:px-0 justify-center">
        <div className="flex w-full max-w-5xl justify-between">
          <div className="flex">
            <a href="#">
              <img src="./icon-dark.svg" className="h-[30px] md:h-[34px]" />
            </a>
          </div>
          <div>
            <div className="items-center gap-2 hidden md:flex">
              <MenuItem link="#" text="Sobre" />
              <MenuItem link="#habilidades" text="Habilidades" />
              <MenuItem link="#projetos" text="Projetos" />
              <MenuItem link="#contato" text="Contato" />
            </div>
            <div className="text-white flex md:hidden">
              <SidebarMenu />
            </div>
          </div>
        </div>
      </header>

      <section
        id="sobre"
        className="bg-dark text-white flex flex-col py-8 items-center space-y-4 lg:mt-6"
      >
        <div className="flex md:space-y-[100px]">
          <div className="container flex flex-col items-center md:flex-row space-y-4 lg:space-y-0 md:space-x-24 lg:space-x-48 max-w-5xl">
            <div className="flex flex-col space-y-4 md:flex-1 md:space-y-6">
              <div className="main flex flex-col items-center md:items-start">
                <span className="text-3xl lg:text-5xl lg:text-left">
                  Olá, eu sou o
                </span>
                <span className="text-3xl text-blue-500 lg:text-5xl lg:text-left">
                  Marcos Vieira
                </span>
                <span className="text-lg text-blue-300 lg:text-2xl lg:text-left">
                  Desenvolvedor Front-End
                </span>
              </div>
              <div className="flex flex-row space-x-4 justify-center lg:justify-start">
                <a
                  href="docs/cv-marcos-vieira.pdf"
                  download
                  className="font-bold animblur text-center text-blue-900 bg-gradient-to-r from-blue-100 to-blue-300 text-sm px-6 py-2 rounded-xl md:text-md"
                >
                  Download CV
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5585986099213"
                  target="_blank"
                  className="font-bold animblur text-center text-blue-100 border border-blue-100 text-sm px-6 py-2 rounded-xl md:text-md"
                >
                  Entrar em Contato
                </a>
              </div>
            </div>

            <div className="justify-center animblur">
              <a href="https://github.com/marvieiradev" target="_blank">
                <img
                  src="./images/logo.png"
                  className="h-48 md:h-[250px] lg:h-[300px] opacity-90 hover:opacity-100 hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 animblur lg:py-10 max-w-5xl">
          <h1 className="titles text-2xl text-center font-bold lg:text-3xl">
            Sobre mim
          </h1>
          <p className="flex flex-col justify-center text-center items-center text-md space-y-2 px-8 md:text-lg lg:text-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
            <p>Desenvolvedor Front-end Graduado em ADS. Conhecimentos em Java, Kotlin, HTML, CSS, JavaScript, banco de
              dados, e atualmente dedicado a dominar o React.js. E entusiasta em desenvolvimento de jogos, sempre buscando
              inovar e aprender novas tecnologias.</p>
          </p>
          <div className="flex space-x-2">
            <div className="alien"></div>
            <div className="alien"></div>
            <div className="alien"></div>
          </div>
        </div>
      </section>

      <section
        id="habilidades"
        className="reveal text-white flex flex-col py-10 space-y-4 md:space-y-8 items-center px-5"
      >
        <br />
        <div id="titulo-contato">
          <h1 className="titles text-2xl text-center font-bold lg:text-3xl">
            Habilidades
          </h1>
        </div>
        <div className="container flex gap-1 flex-wrap place-items-center justify-center my-10 max-w-5xl">
          <Skill text="HTML5" logo="html" />
          <Skill text="CSS3" logo="css" />
          <Skill text="JavaScript" logo="javascript" />
          <Skill text="SASS" logo="sass" />
          <Skill text="Tailwind CSS" logo="tailwind" />
          <Skill text="Kotlin" logo="kotlin" />
          <Skill text="Git" logo="git" />
          <Skill text="React.js" logo="reactjs" />
          <Skill text="Node.js" logo="nodejs" />
          <Skill text="TypeScript" logo="typescript" />
          <Skill text="Bootstrap" logo="bootstrap" />
          <Skill text="Next.js" logo="nextjs" />
        </div>
      </section>

      <section
        id="projetos"
        className="reveal text-white flex flex-col py-10 space-y-4 md:space-y-8 items-center"
      >
        <br />
        <div id="titulo-contato">
          <h1 className="titles text-2xl text-center font-bold lg:text-3xl">
            Projetos
          </h1>
        </div>

        <div className="container flex flex-wrap place-items-center justify-center my-10 px-3 max-w-5xl">

          <div
            onClick={() => {
              setShowModalEmpty(true);
            }}
          >
            <Project
              classe="project-empty"
              titulo="Lanche Express"
              img1="gear"
              cls2="hidden"
              cls3="hidden"
              cls4="hidden"
              cls5="hidden"
            />
          </div>

          <div
            onClick={() => {
              setProject("torcedor-raiz");
              setShowModal(true);
            }}
          >
            <Project
              classe="project-torcedor-raiz"
              titulo="Torcedor Raiz"
              img1="reactjs"
              img2="tailwind"
              img3="javascript"
              cls4="hidden"
              cls5="hidden"
            />
          </div>

          <div
            onClick={() => {
              setProject("my_finances");
              setShowModal(true);
            }}
          >
            <Project
              classe="project-my-finances"
              titulo="My Finances"
              img1="reactjs"
              img2="nextjs"
              img3="typescript"
              img4="tailwind"
              cls5="hidden"
            />
          </div>

          <div
            onClick={() => {
              setProject("king_barber");
              setShowModal(true);
            }}
          >
            <Project
              classe="project-king-barber"
              titulo="King Barber"
              img1="reactjs"
              img2="nextjs"
              img3="typescript"
              img4="tailwind"
              cls5="hidden"
            />
          </div>

          <div
            onClick={() => {
              setProject("monster_quiz");
              setShowModal(true);
            }}
          >
            <Project
              classe="project-monster-quiz"
              titulo="Monster Quiz"
              img1="reactjs"
              img2="tailwind"
              img3="javascript"
              cls4="hidden"
              cls5="hidden"
            />
          </div>

          <div
            onClick={() => {
              setProject("best_trip");
              setShowModal(true);
            }}
          >
            <Project
              classe="project-best-trip"
              titulo="Best Trip"
              img1="reactjs"
              img2="nextjs"
              img3="typescript"
              img4="tailwind"
              cls5="hidden"
            />
          </div>

          <div
            onClick={() => {
              setProject("1up_store");
              setShowModal(true);
            }}
          >
            <Project
              classe="project-1up-store"
              titulo="1UP Store"
              img1="reactjs"
              img2="nextjs"
              img3="typescript"
              img4="tailwind"
              cls5="hidden"
            />
          </div>

          <div
            onClick={() => {
              setProject("meu_palpite");
              setShowModal(true);
            }}
          >
            <Project
              classe="project-meu-palpite"
              titulo="Meu Palpite"
              img1="html"
              img2="css"
              img3="javascript"
              img4="tailwind"
              img5="reactjs"
            />
          </div>

          <div
            onClick={() => {
              setProject("quiz_hunter");
              setShowModal(true);
            }}
          >
            <Project
              classe="project-quiz-hunter"
              titulo="Quiz Hunter"
              img1="kotlin"
              cls2="hidden"
              cls3="hidden"
              cls4="hidden"
              cls5="hidden"
            />
          </div>

          <div
            onClick={() => {
              setProject("god_of_war");
              setShowModal(true);
            }}
          >
            <Project
              classe="project-god-of-war"
              titulo="God of War"
              img1="html"
              img2="css"
              img3="javascript"
              img4="sass"
              cls5="hidden"
            />
          </div>

          <div
            onClick={() => {
              setProject("pokedex");
              setShowModal(true);
            }}
          >
            <Project
              classe="project-pokedex"
              titulo="Pokedex"
              img1="html"
              img2="css"
              img3="javascript"
              cls4="hidden"
              cls5="hidden"
            />
          </div>

          <div
            onClick={() => {
              setProject("app_clima");
              setShowModal(true);
            }}
          >
            <Project
              classe="project-app-clima"
              titulo="App Clima"
              img1="html"
              img2="css"
              img3="javascript"
              cls4="hidden"
              cls5="hidden"
            />
          </div>

          <div
            onClick={() => {
              setProject("editor_de_texto");
              setShowModal(true);
            }}
          >
            <Project
              classe="project-editor-texto"
              titulo="Editor de Texto"
              img1="html"
              img2="css"
              img3="javascript"
              cls4="hidden"
              cls5="hidden"
            />
          </div>

          <div
            onClick={() => {
              setProject("gerador_qr_code");
              setShowModal(true);
            }}
          >
            <Project
              classe="project-gerador-qr-code"
              titulo="Gerador de QR Code"
              img1="html"
              img2="css"
              img3="javascript"
              cls4="hidden"
              cls5="hidden"
            />
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="reveal text-white flex flex-col space-y-4 py-10 md:space-y-8"
      >
        <br />
        <div id="titulo-contato">
          <h1 className="titles text-2xl text-center font-bold lg:text-3xl">
            Contatos
          </h1>
        </div>

        <div className="flex justify-center p-4">
          <div
            id="icons"
            className="container max-w-6xl flex flex-row justify-center"
          >
            <div className="flex justify-center">
              <div className="flex flex-col space-y-6 md:space-x-6 md:space-y-0 md:flex-row">
                <div className="container flex space-x-6 justify-center md:justify-end">
                  <Contact
                    link="mailto:marvieiradev@gmail.com"
                    icone="email"
                    titulo="Email"
                    info="marvieiradev@gmail.com"
                  />
                  <Contact
                    link="https://api.whatsapp.com/send?phone=5585986099213"
                    icone="phone"
                    titulo="Telefone"
                    info="(85) 98609.9213"
                  />
                </div>

                <div className="container flex space-x-6 justify-center md:justify-start">
                  <Contact
                    link="https://www.linkedin.com/in/marcos-vieira-b5407192/"
                    icone="linkedin"
                    titulo="Linkedin"
                    info="Marcos Vieira"
                  />
                  <Contact
                    link="https://github.com/marvieiradev"
                    icone="github"
                    titulo="Github"
                    info="marvieiradev"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="py-4">
          <h4 className="text-center text-md text-white">
            &copy; 2025 - Marcos Vieira
          </h4>
        </div>
      </footer>

      <ModalEmpty onClose={handleOnClose} visible={showModalEmpty} />
      <Modal
        onClose={handleOnClose}
        visible={showModal}
        id={project}
      />
    </>
  );
}
