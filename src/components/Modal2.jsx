import React from "react"

export default function Modal2({ visible, onClose }) {
    const handleOnClose = (e) => {
        if (e.target.id === 'container') onClose();
    }
    if (!visible) return null;

    return (
        <div id="container" onClick={handleOnClose} className="fixed top-0 z-30 inset-0 bg-dark bg-opacity-80 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-darker text-white p-2 rounded-xl max-w-lg lg:max-w-6xl">
                <div className="flex justify-end z-31">
                    <button onClick={onClose} className="no-title text-base lg:text-lg text-white px-2">X</button>
                </div>

                <div className="flex flex-col items-center px-2 lg:flex-row lg:space-x-6 lg:px-6">
                    <div className="flex justify-center ">
                        <iframe className="w-[400px] h-[250px] lg:w-[640px] lg:h-[360px]" src="https://www.youtube.com/embed/x_jn4Ne2PaE" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div className="flex flex-col justify-center p-2 space-y-4 lg:justify-start">
                        <h1 id="md-title" className="titles text-2xl text-center font-bold text-blue-300 lg:text-2xl">God of War</h1>
                        <p className="text-sm lg:text-base">Interface do site do jogo "God of War Ragnarök" a página conta com animações ao usar o scroll do mouse e é totalmente responsiva, sendo exibida perfeitamente no desktop e mobile.</p>
                        <p className="text-sm lg:text-base">
                            <p>Projeto desenvolvido no evento Semana Front-end da Codeboost.</p>
                            <br></br>
                            <p>Tecnologias Utilizadas:</p>
                            <p>• Javascript</p>
                            <p>• CSS e HTML com SASS</p>
                        </p>
                        <p className="text-lg font-bold text-blue-500">Novembro de 2022</p>
                    </div>

                </div>

                <div className="flex justify-center p-4">
                    <div className="flex flex-row space-x-4 justify-center lg:justify-start">
                        <a href="https://god-of-war-red.vercel.app/" target="_blank" className="text-center font-bold text-blue-900 bg-gradient-to-r from-blue-100 to-blue-300 text-sm px-6 py-2 rounded-xl md:text-md">
                            Acessar Projeto
                        </a>
                        <a href="https://github.com/marvieiradev/god-of-war" target="_blank" className="text-center font-bold text-blue-100 border border-blue-100 text-sm px-6 py-2 rounded-xl md:text-md">
                            Acessar Repositório
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}