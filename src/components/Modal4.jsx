import React from "react"
import ModalHeader from "./modal/ModalHeader";
import ModalBody from "./modal/ModalBody";
import ModalFooter from "./modal/ModalFooter";

export default function Modal4({ visible, onClose }) {
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