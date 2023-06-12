import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";
import ModalButton from "./modal/ModalButton";
import ModalGlobal from "./modal/ModalGlobal";

export default function Modal2({ visible, onClose }) {
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

                <div id="body" className={"flex flex-col lg:flex-row" +ModalGlobal.modalBody}>
                    <ModalHeader link="https://www.youtube.com/embed/x_jn4Ne2PaE" />

                    <ModalBody
                        titulo="God of War"
                        subtitulo={`Interface do site do jogo "God of War Ragnarök" a página conta com animações ao usar o scroll do mouse e é totalmente responsiva, sendo exibida perfeitamente no desktop e mobile.`}
                        infos={`<p>Projeto desenvolvido no evento Semana Front-end da Codeboost.</p>
                        <br>
                        <p>Tecnologias Utilizadas:</p>
                        <p>• Javascript</p>
                        <p>• CSS e HTML com SASS</p>`}
                        data="Novembro de 2022"
                    />
                </div>
                <ModalFooter
                    linkbtn1="https://god-of-war-red.vercel.app/" txtbtn1="Acessar Projeto"
                    linkbtn2="https://github.com/marvieiradev/god-of-war" txtbtn2="Acessar Repositório"
                />
            </div>
        </div>
    )
}