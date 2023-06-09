import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";

export default function Modal3({ visible, onClose }) {
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
                    clsbtn2="hidden"
                />
            </div>
        </div>
    )
}