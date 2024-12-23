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
                    <ModalHeader link="https://www.youtube.com/embed/z3eR-lbeW9w" />

                    <ModalBody
                        titulo="King Barber"
                        subtitulo="Sistema de reserva de barbearias desenvolvido durante a FSW, evento cujo objetivo principal é criar projetos relevantes, utilizando as tecnologias mais modernas e demandadas pelo mercado."
                        infos={`
                                <p>• React</p>
                                <p>• Next.js 13</p>
                                <p>• Next Auth</p>
                                <p>• Postgres com NeonDB</p>
                                <p>• Prisma</p>
                                <p>• Tailwind CSS</p>`}
                        data="Outubro de 2024"
                    />
                </div>
                <ModalFooter
                    linkbtn1="https://kingbarber.vercel.app/" txtbtn1="Acessar Projeto"
                    linkbtn2="https://github.com/marvieiradev/king-barber" txtbtn2="Acessar Repositório"
                />
            </div>
        </div>
    )
}