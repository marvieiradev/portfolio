import React from "react"

export default function Modal({ visible, onClose }) {
    const handleOnClose = (e) => {
        if (e.target.id === 'container') onClose();
    }
    if (!visible) return null;

    return (
        <div id="container" onClick={handleOnClose} className="fixed top-0 z-30 inset-0 bg-dark bg-opacity-80 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-darker text-white p-2 rounded-xl max-w-lg lg:max-w-6xl">
                <div className="flex justify-end z-31">
                    <button onClick={onClose} className="text-base lg:text-lg text-white px-2 bg-blue-900 rounded-xl">X</button>
                </div>

                <div className="flex flex-col items-center px-2 lg:flex-row lg:space-x-6 lg:px-6">
                    <div className="flex justify-center ">
                        <iframe className="w-[400px] h-[250px] lg:w-[640px] lg:h-[360px]" src="https://player.vimeo.com/video/771349013?h=232b3b418b" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div className="flex flex-col justify-center p-2 space-y-4 lg:justify-start">
                        <h1 id="md-title" className="titles text-2xl text-center font-bold text-blue-500 lg:text-2xl">TITULO 1</h1>
                        <p className="text-sm lg:text-base">O DoWhile 2021 Card é uma aplicação interativa que mostra informações do usuário através da API do GitHub :D</p>
                        <p className="text-sm lg:text-base">
                            <p>• Modal para o usuário inserir seus próprios dados no Card;</p>
                            <p>• Armazenamento dos dados inseridos pelo usuário no LocalStorage do navegador, fazendo com que as informações sejam mantidas mesmo após fechar a página;</p>
                            <p>• Animação de Flip em 3D (com CSS puro);</p>
                            <p>• Verso do Card com informações sobre o DoWhile 2021;</p>
                            <p>• Versão Desktop e Mobile.</p>
                        </p>
                        <p className="text-lg font-bold text-blue-300">17 de Agosto de 2000</p>
                    </div>

                </div>

                <div className="flex justify-center p-4">
                    <div className="flex flex-row space-x-4 justify-center lg:justify-start">
                        <a href="./docs/cv.pdf" download className="text-center font-bold text-blue-900 bg-gradient-to-r from-blue-100 to-blue-300 text-sm px-6 py-2 rounded-xl md:text-md">
                            Acessar Projeto
                        </a>
                        <button className="text-center font-bold text-blue-100 border border-blue-100 text-sm px-6 py-2 rounded-xl md:text-md">
                            Acessar Repositório
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}