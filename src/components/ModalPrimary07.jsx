import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";
import ModalButton from "./modal/ModalButton";
import ModalGlobal from "./modal/ModalGlobal";

export default function ModalPrimary07({ visible, onClose }) {
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
                    <ModalHeader link="https://www.youtube.com/embed/gzT9r1_kpQI" />

                    <ModalBody
                        titulo="King Barber"
                        subtitulo={`Jogo em formato de quiz, Baseado no jogo " Monster Hunter" da Capcom. Onde o objetivo é acertar o nome correto dos monstros da franquia, de acordo com a sua imagem.`}
                        infos={`
                            <p>Tecnologias Utilizadas:</p>
                                <p>• React</p>
                                <p>• Javascript</p>
                                <p>• Tailwind CSS</p>`}
                        data="Junho de 2024"
                    />
                </div>
                <ModalFooter
                    linkbtn1="https://monsterquiz.vercel.app/" txtbtn1="Acessar Projeto"
                    linkbtn2="https://github.com/marvieiradev/monster-quiz-v1/tree/master/quiz" txtbtn2="Acessar Repositório"
                />
            </div>
        </div>
    )
}