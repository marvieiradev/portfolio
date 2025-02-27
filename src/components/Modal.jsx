import React from "react"
import projects from "../data/modal-projects";
import { CircleX } from "lucide-react"

export default function Modal({ visible, onClose, id }) {
    const proj = projects.find((proj) => proj.id === id);
    const handleOnClose = (e) => {
        if (e.target.id === 'container') onClose();
    }
    if (!visible) return null;

    return (
        <div id="container" onClick={handleOnClose} className="fixed top-10 z-30 inset-0 bg-dark bg-opacity-80 backdrop-blur-sm flex justify-center items-center">
            <div id="elements" className="bg-darker text-white p-2 rounded-xl max-w-[340px] md:max-w-lg lg:max-w-5xl xl:max-w-6xl">

                <div onClick={onClose}>
                    <div className="flex justify-end z-31">
                        <button className="no-title text-base lg:text-lg text-white px-2 mb-2"><CircleX /></button>
                    </div>
                </div>

                <div id="body" className="flex flex-col lg:flex-row items-center px-2 lg:space-x-6 lg:px-6">
                    <div className="flex flex-col justify-start">
                        <iframe className="w-[300px] h-[180px] md:w-[426px] md:h-[240px] lg:w-[560px] lg:h-[320px] xl:w-[600px] xl:h-[340px]" src={`${proj.video}?autoplay=1&loop=1&mute=1&controls=0`} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                        <p className="text-center p-2">(Vídeo de demonstração)</p>
                    </div>

                    <div className="flex flex-col justify-center p-4 space-y-2 lg:justify-start">
                        <h1 id="md-title" className="titles text-2xl text-center font-bold text-blue-300 lg:text-2xl">{proj.titulo}</h1>
                        <p className="text-xs text-justify lg:text-base leading-1">{proj.subtitulo}</p>
                        <p className="text-xs lg:text-base leading-1">{proj.info}</p>
                        <div>
                            {
                                proj.tecnologias.map((tecnologia) => (
                                    <p className="text-xs lg:text-base leading-1">• {tecnologia}</p>
                                ))
                            }
                        </div>
                        <p className="text-md font-bold text-blue-500 md:text-lg">{proj.data}</p>
                    </div>
                </div>
                <div className="flex justify-center p-4">
                    <div className="flex flex-row space-x-4 justify-center lg:justify-start">
                        {proj.btn_projeto && (
                            <a href={proj.link_projeto} target="_blank" className="text-center font-bold text-blue-900 bg-gradient-to-r from-blue-100 to-blue-300 text-xs px-6 py-2 rounded-xl md:text-md">
                                Acessar Projeto
                            </a>
                        )}

                        {proj.btn_repositorio && (
                            <a href={proj.link_repositorio} target="_blank" className="text-center font-bold text-blue-100 border border-blue-100 text-xs px-6 py-2 rounded-xl md:text-md">
                                Acessar Repositório
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}