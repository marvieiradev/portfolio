import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";
import ModalButton from "./modal/ModalButton";
import ModalGlobal from "./modal/ModalGlobal";

export default function ModalPrimary08({ visible, onClose }) {
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
                    <ModalHeader link="https://www.youtube.com/embed/Pn1d8AuG52U" />

                    <ModalBody
                        titulo="My Finances"
                        subtitulo="Sistema de finanças onde os usuário cadastra suas movimentações financeiras, que são organizadas e melhoradas graças a insights inteligentes através da Inteligência Artificial, que analisa seus dados financeiros e identifica padrões, tendências e oportunidades de economia."
                        infos={`
                            <p>Tecnologias Utilizadas:</p>
                                <p>• React</p>
                                <p>• Next.js</p>
                                <p>• Tailwind CSS</p>
                                <p>• Postgres com NeonDB</p>
                                <p>• Auth com Clerk</p>
                                <p>• Relatório de IA utilizando ChatGPT</p>`}
                        data="Dezembro de 2024"
                    />
                </div>
                <ModalFooter
                    linkbtn1="https://my-finances-ai.vercel.app/" txtbtn1="Acessar Projeto"
                    linkbtn2="https://github.com/marvieiradev/my-finances" txtbtn2="Acessar Repositório"
                />
            </div>
        </div>
    )
}