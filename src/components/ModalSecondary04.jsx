import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";
import ModalButton from "./modal/ModalButton";
import ModalGlobal from "./modal/ModalGlobal";

export default function ModalSecondary04({ visible, onClose }) {
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
                    <ModalHeader link="https://www.youtube.com/embed/dW2Dvo3y_qU" />

                    <ModalBody
                        titulo="Gerador de QR Code"
                        subtitulo="Feito com apenas HTML, CSS e Javascript, esse é um gerador de QR code bem simples porém efetivo."
                        infos={`<p>Com esse gerador é possível criar um QR code a partir de qualquer URL ou texto, Também é possível personalizar suas cores e fazer o download em formato PNG e SVG.</p>
                        <br>
                        <p>Tecnologias Utilizadas:</p>
                        <p>• Javascript</p>
                        <p>• CSS e HTML</p>`}
                        data="Agosto de 2023"
                    />
                </div>
                <ModalFooter
                    linkbtn1="https://qrcode-generator-marvieira.vercel.app/" txtbtn1="Acessar Projeto"
                    linkbtn2="https://github.com/marvieiradev/qrcode-generator" txtbtn2="Acessar Repositório"
                />
            </div>
        </div>
    )
}