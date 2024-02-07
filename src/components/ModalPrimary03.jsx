import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";
import ModalButton from "./modal/ModalButton";
import ModalGlobal from "./modal/ModalGlobal";

export default function ModalPrimary03({ visible, onClose }) {
    const handleOnClose = (e) => {
        if (e.target.id === 'container') onClose();
    }
    if (!visible) return null;

    return (
        <div id="container" onClick={handleOnClose} className={ModalGlobal.modalContainer}>
            <div id="elements" className={ModalGlobal.modalElements}>

                <div onClick={onClose}>
                    <ModalButton />
                </div>

                <div id="body" className={"flex flex-col lg:flex-row " + ModalGlobal.modalBody}>
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