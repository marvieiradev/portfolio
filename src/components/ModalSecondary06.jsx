import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";
import ModalButton from "./modal/ModalButton";
import ModalGlobal from "./modal/ModalGlobal";

export default function ModalSecondary06({ visible, onClose }) {
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
                    <ModalHeader link="https://" />

                    <ModalBody
                        titulo=""
                        subtitulo=""
                        infos={`<p>.</p>
                        <br>
                        <p>Tecnologias Utilizadas:</p>
                        <p>• </p>
                        <p>• </p>`}
                        data=""
                    />
                </div>
                <ModalFooter
                    linkbtn1="https://" txtbtn1="Acessar Projeto"
                    linkbtn2="https://" txtbtn2="Acessar Repositório"
                />
            </div>
        </div>
    )
}