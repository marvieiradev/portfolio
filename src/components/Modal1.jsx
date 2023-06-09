import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";

export default function Modal11({ visible, onClose }) {
    const handleOnClose = (e) => {
        if (e.target.id === 'container') onClose();
    }
    if (!visible) return null;

    return (
        <div id="container" onClick={handleOnClose} className="fixed top-10 z-30 inset-0 bg-dark bg-opacity-80 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-darker text-white p-2 rounded-xl max-w-[340px] md:max-w-lg lg:max-w-6xl">
                <div className="flex justify-end z-31">
                    <button onClick={onClose} className="no-title text-base lg:text-lg text-white px-2">X</button>
                </div>

                <div className="flex flex-col items-center px-2 lg:flex-row lg:space-x-6 lg:px-6">
                    <ModalHeader link="https://www.youtube.com/embed/jtkRr3sUO0k" />

                    <ModalBody
                        titulo="Meu Palpite"
                        subtitulo="Meu Palpite é um aplicativo onde o usuário pode registrar seus palpites nos jogos da Copa do Mundo 2022, também é possivel compartilhar seus palpites."
                        infos={`<p>Projeto desenvolvido no evento Full Stack Challenge da Codar.me.</p>
                            <br>
                            <p>Tecnologias Utilizadas:</p>
                            <p>• Javascript</p>
                            <p>• NodeJS com Koa</p>
                            <p>• CSS e HTML com Tailwind</p>
                            <p>• Banco de dados com Prisma e PlanetScale</p>`}
                        data="Novembro de 2022"
                    />
                </div>
                <ModalFooter
                    linkbtn1="https://meupalpite-web.vercel.app/" txtbtn1="Acessar Projeto"
                    linkbtn2="https://github.com/marvieiradev/meupalpite-web/" txtbtn2="Acessar Repositório"
                />
            </div>
        </div>
    )
}