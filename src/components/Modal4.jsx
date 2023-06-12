import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";
import ModalButton from "./modal/ModalButton";
import ModalGlobal from "./modal/ModalGlobal";

export default function Modal4({ visible, onClose }) {
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

                <div id="body" className={"flex flex-col lg:flex-row" + ModalGlobal.modalBody}>
                    <ModalHeader link="https://www.youtube.com/embed/MlT2C0ZuSf4" />

                    <ModalBody
                        titulo="Pokedex"
                        subtitulo="Pokedex desenvolvida usando HTML, CSS e Javascript."
                        infos={`<p>As informações dos pokemons são exibidas dinamicamnte usando JSON que carrega os dados diretamente de uma API, a "PokeApi".</p>
                        <br>
                        <p>Tecnologias Utilizadas:</p>
                        <p>• Javascript</p>
                        <p>• CSS e HTML</p>`}
                        data="Maio de 2023"
                    />
                </div>
                <ModalFooter
                    linkbtn1="https://pokedex-v1-one.vercel.app/" txtbtn1="Acessar Projeto"
                    linkbtn2="https://github.com/marvieiradev/pokedex-v1" txtbtn2="Acessar Repositório"
                />
            </div>
        </div>
    )
}