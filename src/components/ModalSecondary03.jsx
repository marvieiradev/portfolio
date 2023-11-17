import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";
import ModalButton from "./modal/ModalButton";
import ModalGlobal from "./modal/ModalGlobal";

export default function ModalSecondary03({ visible, onClose }) {
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
                    <ModalHeader link="https://www.youtube.com/embed/uYdnN770dWc" />

                    <ModalBody
                        titulo="Editor de Texto"
                        subtitulo="Editor de texto simples usando HTML, CSS e Javascript."
                        infos={`<p>É possível digitar e aplicar diversas formatações de texto, como tamanho da fonte, cor de fonte e estilo de texto (formatacão, inseris link, lista, identação). Também é possível salvar e carregar o texto no formato TXT.</p>
                        <br>
                        <p>Tecnologias Utilizadas:</p>
                        <p>• Javascript</p>
                        <p>• CSS e HTML</p>`}
                        data="Agosto de 2023"
                    />
                </div>
                <ModalFooter
                    linkbtn1="https://marvieira-text-editor.vercel.app/" txtbtn1="Acessar Projeto"
                    linkbtn2="https://github.com/marvieiradev/text-editor" txtbtn2="Acessar Repositório"
                />
            </div>
        </div>
    )
}