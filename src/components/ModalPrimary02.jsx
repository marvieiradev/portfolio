import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";
import ModalButton from "./modal/ModalButton";
import ModalGlobal from "./modal/ModalGlobal";

export default function ModalPrimary02({ visible, onClose }) {
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
                    <ModalHeader link="https://www.youtube.com/embed/bQg7OMd2s5Y" />

                    <ModalBody
                        titulo="Quiz Hunter"
                        subtitulo={`Aplicativo/Jogo em formato de quiz, Baseado no jogo "Monster Hunter" da Capcom. Onde o objetivo é acertar o nome correto dos monstros da franquia, representados pela sua figura.`}
                        infos={`<p>Projeto desenvolvido totalmente em Kotlin nativo. Utlizando o Android Studio.</p>
                        <br>
                        <p>Tecnologias Utilizadas:</p>
                        <p>• Kotlin</p>`}
                        data="Abril de 2023"
                    />
                </div>
                <ModalFooter
                    linkbtn1="https://play.google.com/store/apps/details?id=com.mvieira.quizhunter" txtbtn1="Ver aplicativo publicado na Google Play"
                    linkbtn2="https://github.com/marvieiradev/quiz-hunter" txtbtn2="Acessar Repositório"
                />
            </div>
        </div>
    )
}