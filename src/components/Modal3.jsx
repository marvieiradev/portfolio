import React from "react"

export default function Modal3({ visible, onClose }) {
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
                    <div className="flex justify-center ">
                        <iframe className="w-[300px] h-[180px] md:w-[400px] md:h-[250px] lg:w-[640px] lg:h-[360px]" src="https://www.youtube.com/embed/bQg7OMd2s5Y" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div className="flex flex-col justify-center p-5 space-y-4 lg:justify-start">
                        <h1 id="md-title" className="titles text-2xl text-center font-bold text-blue-300 lg:text-2xl">Quiz Hunter</h1>
                        <p className="text-xs lg:text-base">Aplicativo/Jogo em formato de quiz, Baseado no jogo "Monster Hunter" da Capcom. Onde o objetivo é acertar o nome correto dos monstros da franquia, representados pela sua figura.</p>
                        <p className="text-xs lg:text-base">
                            <p>Projeto desenvolvido totalmente em Kotlin nativo. Utlizando o Android Studio.</p>
                            <br></br>
                            <p>Tecnologias Utilizadas:</p>
                            <p>• Kotlin</p>
                        </p>
                        <p className="text-md font-bold text-blue-500 md:text-lg">Abril de 2023</p>
                    </div>

                </div>

                <div className="flex justify-center p-4">
                    <div className="flex flex-row space-x-4 justify-center lg:justify-start">
                        <a href="https://play.google.com/store/apps/details?id=com.mvieira.quizhunter" target="_blank" className="text-center font-bold text-blue-900 bg-gradient-to-r from-blue-100 to-blue-300 text-xs px-6 py-2 rounded-xl md:text-md">
                            Ver aplicativo publicado na Google Play
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}