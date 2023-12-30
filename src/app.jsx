import { useState } from "react";
import ModalEmpty from "./components/ModalEmpty";
import ModalPrimary01 from "./components/ModalPrimary01";
import ModalPrimary02 from "./components/ModalPrimary02";
import ModalPrimary03 from "./components/ModalPrimary03";
import ModalPrimary04 from "./components/ModalPrimary04";
import ModalPrimary05 from "./components/ModalPrimary05";
import ModalSecondary01 from "./components/ModalSecondary01";
import ModalSecondary02 from "./components/ModalSecondary02";
import ModalSecondary03 from "./components/ModalSecondary03";
import ModalSecondary04 from "./components/ModalSecondary04";
import ModalSecondary05 from "./components/ModalSecondary05";
import ModalSecondary06 from "./components/ModalSecondary06";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Project from "./components/Project";

export function App() {

  const [showModalEmpty, setShowModalEmpty] = useState(false)
  const [showModalPrimary01, setShowModalPrimary01] = useState(false)
  const [showModalPrimary02, setShowModalPrimary02] = useState(false)
  const [showModalPrimary03, setShowModalPrimary03] = useState(false)
  const [showModalPrimary04, setShowModalPrimary04] = useState(false)
  const [showModalPrimary05, setShowModalPrimary05] = useState(false)
  const [showModalSecondary01, setShowModalSecondary01] = useState(false)
  const [showModalSecondary02, setShowModalSecondary02] = useState(false)
  const [showModalSecondary03, setShowModalSecondary03] = useState(false)
  const [showModalSecondary04, setShowModalSecondary04] = useState(false)
  const [showModalSecondary05, setShowModalSecondary05] = useState(false)
  const [showModalSecondary06, setShowModalSecondary06] = useState(false)
  const handleOnClose = () => {
    setShowModalEmpty(false);
    setShowModalPrimary01(false);
    setShowModalPrimary02(false);
    setShowModalPrimary03(false);
    setShowModalPrimary04(false);
    setShowModalPrimary05(false);
    setShowModalSecondary01(false);
    setShowModalSecondary02(false);
    setShowModalSecondary03(false);
    setShowModalSecondary04(false);
    setShowModalSecondary05(false);
    setShowModalSecondary06(false);
  }

  return (
    <>
      <header className="bg-darker border-b-2 border-blue-300 sticky top-0 z-50 w-full px-2 py-2">
        <div>
          <a href="#">
            <h2 className="text-xl text-white text-center font-bold">Portfólio</h2>
          </a>
        </div>
      </header>

      <section id="sobre" className="bg-dark text-white flex flex-col py-8 items-center space-y-4 lg:mt-6">
        <div className="flex md:space-y-[100px]">
          <div className="container flex flex-col items-center md:flex-row space-y-4 lg:space-y-0 md:space-x-24 lg:space-x-48 max-w-5xl">

            <div className="flex flex-col space-y-4 md:flex-1 md:space-y-6">
              <div className="main flex flex-col items-center md:items-start">
                <span className="text-3xl lg:text-5xl lg:text-left">Olá, eu sou o</span>
                <span className="text-3xl text-blue-500 lg:text-5xl lg:text-left">Marcos Vieira</span>
                <span className="text-lg text-blue-300 lg:text-2xl lg:text-left">Desenvolvedor Front-End</span>
              </div>
              <div className="flex flex-row space-x-4 justify-center lg:justify-start">
                <a href="docs/cv-marcos-vieira.pdf" download className="font-bold animblur text-center text-blue-900 bg-gradient-to-r from-blue-100 to-blue-300 text-sm px-6 py-2 rounded-xl md:text-md">
                  Download CV
                </a>
                <a href="https://api.whatsapp.com/send?phone=5585986099213" target="_blank" className="font-bold animblur text-center text-blue-100 border border-blue-100 text-sm px-6 py-2 rounded-xl md:text-md">
                  Entrar em Contato
                </a>
              </div>
            </div>

            <div className="justify-center animblur">
              <a href="https://github.com/marvieiradev" target="_blank">
                <img src="./images/logo.png" className="h-48 md:h-[250px] lg:h-[300px] opacity-90 hover:opacity-100 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 animblur lg:py-10">
          <h1 className="titles text-2xl text-center font-bold lg:text-3xl">Sobre mim</h1>
          <p className="flex flex-col justify-center text-center items-center text-md space-y-2 px-3 lg:text-xl">
            <p>Formado em Análise e Desenvolvimento de Sistemas.</p>
            <p>Conhecimentos em Java, Kotlin, HTML, CSS, JavaScript e banco de dados.</p>
            <p>E entusiasta em desenvolvimento de jogos.</p>
          </p>
          <div className="flex space-x-2">
            <div className="alien"></div>
            <div className="alien"></div>
            <div className="alien"></div>
          </div>
        </div>
      </section>

      <section id="habilidades" className="reveal text-white flex flex-col py-10 space-y-4 md:space-y-8 items-center px-5">
        <div id="titulo-contato">
          <h1 className="titles text-2xl text-center font-bold lg:text-3xl">Habilidades</h1>
        </div>
        <div className="container flex gap-1 flex-wrap justify-center my-10 max-w-5xl">
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

      <section id="projetos" className="reveal text-white flex flex-col py-10 space-y-4 md:space-y-8 items-center">
        <div id="titulo-contato">
          <h1 className="titles text-2xl text-center font-bold lg:text-3xl">Projetos</h1>
        </div>

        <div className="container flex flex-wrap justify-center my-10 px-3 max-w-5xl">

          <div onClick={() => { setShowModalPrimary05(true) }}>
            <Project classe="project-primary-05" titulo="Best Trip" img1="reactjs" img2="nextjs" img3="tailwind" cls4="hidden" cls5="hidden" />
          </div>

          <div onClick={() => { setShowModalPrimary01(true) }}>
            <Project classe="project-primary-01" titulo="1UP Store" img1="reactjs" img2="nextjs" img3="tailwind" cls4="hidden" cls5="hidden" />
          </div>

          <div onClick={() => { setShowModalPrimary02(true) }}>
            <Project classe="project-primary-02" titulo="Meu Palpite" img1="html" img2="css" img3="javascript" img4="tailwind" img5="reactjs" />
          </div>

          <div onClick={() => { setShowModalPrimary03(true) }}>
            <Project classe="project-primary-03" titulo="Quiz Hunter" img1="kotlin" cls2="hidden" cls3="hidden" cls4="hidden" cls5="hidden" />
          </div>

          <div onClick={() => { setShowModalPrimary04(true) }}>
            <Project classe="project-primary-04" titulo="God of War" img1="html" img2="css" img3="javascript" img4="sass" cls5="hidden" />
          </div>

          <div onClick={() => { setShowModalSecondary01(true) }}>
            <Project classe="project-secondary-01" titulo="Pokedex" img1="html" img2="css" img3="javascript" cls4="hidden" cls5="hidden" />
          </div>

          <div onClick={() => { setShowModalSecondary02(true) }}>
            <Project classe="project-secondary-02" titulo="App Clima" img1="html" img2="css" img3="javascript" cls4="hidden" cls5="hidden" />
          </div>

          <div onClick={() => { setShowModalSecondary03(true) }}>
            <Project classe="project-secondary-03" titulo="Editor de Texto" img1="html" img2="css" img3="javascript" cls4="hidden" cls5="hidden" />
          </div>

          <div onClick={() => { setShowModalSecondary04(true) }}>
            <Project classe="project-secondary-04" titulo="Gerador de QR Code" img1="html" img2="css" img3="javascript" cls4="hidden" cls5="hidden" />
          </div>

          {/*<div onClick={() => { setShowModalEmpty(true) }}>
            <Project classe="project-secondary-05" titulo="Calculadora em Javascript" img1="html" img2="css" img3="javascript" cls4="hidden" cls5="hidden" />
          </div>*/}
        </div>

      </section>


      <section id="contato" className="reveal text-white flex flex-col space-y-4 py-10 md:space-y-8">
        <div id="titulo-contato">
          <h1 className="titles text-2xl text-center font-bold lg:text-3xl">Contatos</h1>
        </div>

        <div className="flex justify-center p-4">
          <div id="icons" className="container max-w-6xl flex flex-row justify-center">
            <div className="flex justify-center">
              <div className="flex flex-col space-y-6 md:space-x-6 md:space-y-0 md:flex-row">

                <div className="container flex space-x-6 justify-center md:justify-end">
                  <Contact link="mailto:marvieiradev@gmail.com" icone="email" titulo="Email" info="marvieiradev@gmail.com" />
                  <Contact link="https://api.whatsapp.com/send?phone=5585986099213" icone="phone" titulo="Telefone" info="(85) 98609.9213" />
                </div>

                <div className="container flex space-x-6 justify-center md:justify-start">
                  <Contact link="https://www.linkedin.com/in/marcos-vieira-b5407192/" icone="linkedin" titulo="Linkedin" info="Marcos Vieira" />
                  <Contact link="https://github.com/marvieiradev" icone="github" titulo="Github" info="marvieiradev" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="py-4">
          <h4 className="text-center text-md text-white">&copy; 2023 - Marcos Vieira</h4>
        </div>
      </footer>

      <ModalEmpty onClose={handleOnClose} visible={showModalEmpty} />
      <ModalPrimary01 onClose={handleOnClose} visible={showModalPrimary01} />
      <ModalPrimary02 onClose={handleOnClose} visible={showModalPrimary02} />
      <ModalPrimary03 onClose={handleOnClose} visible={showModalPrimary03} />
      <ModalPrimary04 onClose={handleOnClose} visible={showModalPrimary04} />
      <ModalPrimary05 onClose={handleOnClose} visible={showModalPrimary05} />
      <ModalSecondary01 onClose={handleOnClose} visible={showModalSecondary01} />
      <ModalSecondary02 onClose={handleOnClose} visible={showModalSecondary02} />
      <ModalSecondary03 onClose={handleOnClose} visible={showModalSecondary03} />
      <ModalSecondary04 onClose={handleOnClose} visible={showModalSecondary04} />
      <ModalSecondary05 onClose={handleOnClose} visible={showModalSecondary05} />
      <ModalSecondary06 onClose={handleOnClose} visible={showModalSecondary06} />
    </>
  )
}
