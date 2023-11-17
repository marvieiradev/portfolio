import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";
import ModalButton from "./modal/ModalButton";
import ModalGlobal from "./modal/ModalGlobal";

export default function ModalPrimary01({ visible, onClose }) {
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
                    <ModalHeader link="https://www.youtube.com/embed/bPzSzFn7-8E" />

                    <ModalBody
                        titulo="1UP Store"
                        subtitulo="E-commerce desenvolvido durante a Full Stack Week, um evento cujo objetivo principal é criar um projeto altamente relevante, utilizando as tecnologias mais modernas e demandadas pelo mercado."
                        infos={`
                            <p>Tecnologias Utilizadas:</p>
                                <p>• React</p>
                                <p>• Next.js 13</p>
                                <p>• Next Auth</p>
                                <p>• Postgres</p>
                                <p>• Prisma</p>
                                <p>• Tailwind CSS</p>
                                <p>• API do Stripe</p>`}
                        data="Novembro de 2023"
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