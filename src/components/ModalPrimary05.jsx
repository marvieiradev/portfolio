import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";
import ModalButton from "./modal/ModalButton";
import ModalGlobal from "./modal/ModalGlobal";

export default function ModalPrimary05({ visible, onClose }) {
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
                    <ModalHeader link="https://www.youtube.com/embed/9nvK93TCyok" />

                    <ModalBody
                        titulo="Best Trip"
                        subtitulo="Sistema de reserva de viagens desenvolvido durante a FSW, evento cujo objetivo principal é criar projetos relevantes, utilizando as tecnologias mais modernas e demandadas pelo mercado."
                        infos={`
                            <p>Tecnologias Utilizadas:</p>
                                <p>• React</p>
                                <p>• Next.js 13</p>
                                <p>• Next Auth</p>
                                <p>• Postgres</p>
                                <p>• Prisma</p>
                                <p>• Tailwind CSS</p>
                                <p>• API do Stripe</p>`}
                        data="Dezembro de 2023"
                    />
                </div>
                <ModalFooter
                    linkbtn1="https://best-trip.vercel.app/" txtbtn1="Acessar Projeto"
                    linkbtn2="https://github.com/marvieiradev/best-trip/" txtbtn2="Acessar Repositório"
                />
            </div>
        </div>
    )
}