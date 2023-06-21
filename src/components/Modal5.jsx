import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";
import ModalButton from "./modal/ModalButton";
import ModalGlobal from "./modal/ModalGlobal";

export default function Modal5({ visible, onClose }) {
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
                    <ModalHeader link="https://www.youtube.com/embed/-IyWFNZ4SZI" />

                    <ModalBody
                        titulo="App Clima"
                        subtitulo="Aplicativo simples de clima usando HTML, CSS e Javascript."
                        infos={`<p>O aplicativo mostra as condições do clima do em tempo real do local pesquisado, como temperaturas mínima e máxima, além da humidade e velocidade do vento. Os dados são obtidos diretamente da "Weather API".</p>
                        <br>
                        <p>Tecnologias Utilizadas:</p>
                        <p>• Javascript</p>
                        <p>• CSS e HTML</p>`}
                        data="Junho de 2023"
                    />
                </div>
                <ModalFooter
                    linkbtn1="https://app-clima-v1.vercel.app/" txtbtn1="Acessar Projeto"
                    linkbtn2="https://github.com/marvieiradev/app-clima" txtbtn2="Acessar Repositório"
                />
            </div>
        </div>
    )
}