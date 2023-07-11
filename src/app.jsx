import { useState } from "react";
import Modal0 from "./components/Modal0";
import Modal1 from "./components/Modal1";
import Modal2 from "./components/Modal2";
import Modal3 from "./components/Modal3";
import Modal4 from "./components/Modal4";
import Modal5 from "./components/Modal5";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Project from "./components/Project";

export function App() {

  const [showModal0, setShowModal0] = useState(false)
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)
  const [showModal4, setShowModal4] = useState(false)
  const [showModal5, setShowModal5] = useState(false)
  const handleOnClose = () => {
    setShowModal0(false);
    setShowModal1(false);
    setShowModal2(false);
    setShowModal3(false);
    setShowModal4(false);
    setShowModal5(false)
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

      <section id="sobre" className="bg-dark text-white flex flex-col py-8 items-center space-y-4">
        <div className="flex md:space-y-[100px]">

          <div className="container flex flex-col items-center md:flex-row space-y-4 lg:space-y-0 md:space-x-32 lg:space-x-40">

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
              <img src="./images/logo.png" className="h-48 md:h-[250px] lg:h-[300px] opacity-90 hover:opacity-100 hover:scale-110" />
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

      <section id="habilidades" className="reveal text-white flex flex-col py-10 space-y-4 md:space-y-8 items-center">
        <div id="titulo-contato">
          <h1 className="titles text-2xl text-center font-bold lg:text-3xl">Habilidades</h1>
        </div>

        <div className="container flex flex-wrap justify-center my-10 px-3 max-w-6xl">

          <Skill text="HTML5" logo="html" />
          <Skill text="CSS3" logo="css" />
          <Skill text="JavaScript" logo="javascript" />
          <Skill text="SASS" logo="sass" />
          <Skill text="Tailwind.CSS" logo="tailwind" />
          <Skill text="Kotlin" logo="kotlin" />
          <Skill text="Git" logo="git" />
          <Skill text="React.JS" logo="reactjs" />
          <Skill text="Node.JS" logo="nodejs" /> 
          <Skill text="TypeScript" logo="typescript" />        

        </div>

      </section>

      <section id="projetos" className="reveal text-white flex flex-col py-10 space-y-4 md:space-y-8 items-center">
        <div id="titulo-contato">
          <h1 className="titles text-2xl text-center font-bold lg:text-3xl">Projetos</h1>
        </div>

        <div className="container flex flex-wrap justify-center my-10 px-3">

          <div onClick={() => { setShowModal1(true) }}>
            <Project classe="project-1" titulo="Meu Palpite" img1="html" img2="css" img3="javascript" img4="tailwind" img5="reactjs" />
          </div>

          <div onClick={() => { setShowModal2(true) }}>
            <Project classe="project-2" titulo="God of War" img1="html" img2="css" img3="javascript" img4="sass" cls5="hidden" />
          </div>

          <div onClick={() => { setShowModal3(true) }}>
            <Project classe="project-3" titulo="Quiz Hunter" img1="kotlin" cls2="hidden" cls3="hidden" cls4="hidden" cls5="hidden" />
          </div>

          <div onClick={() => { setShowModal4(true) }}>
            <Project classe="project-4" titulo="Pokedex" img1="html" img2="css" img3="javascript" cls4="hidden" cls5="hidden" />
          </div>

          <div onClick={() => { setShowModal5(true) }}>
            <Project classe="project-5" titulo="App Clima" img1="html" img2="css" img3="javascript" cls4="hidden" cls5="hidden" />
          </div>

          <div onClick={() => { setShowModal0(true) }}>
            <Project classe="project-6" titulo="Gerador de QR Code" img1="html" img2="css" img3="javascript" cls4="hidden" cls5="hidden" />
          </div>

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

      <Modal0 onClose={handleOnClose} visible={showModal0} />
      <Modal1 onClose={handleOnClose} visible={showModal1} />
      <Modal2 onClose={handleOnClose} visible={showModal2} />
      <Modal3 onClose={handleOnClose} visible={showModal3} />
      <Modal4 onClose={handleOnClose} visible={showModal4} />
      <Modal5 onClose={handleOnClose} visible={showModal5} />

    </>
  )
}
