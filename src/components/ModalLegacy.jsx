import React from "react"

export default function ModalLegacy({ visible, onClose }) {
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
                        <iframe className="w-[300px] h-[180px] md:w-[400px] md:h-[250px] lg:w-[640px] lg:h-[360px]" src="https://www.youtube.com/embed/jtkRr3sUO0k" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div className="flex flex-col justify-center p-5 space-y-4 lg:justify-start">
                        <h1 id="md-title" className="titles text-2xl text-center font-bold text-blue-300 lg:text-2xl">Meu Palpite</h1>
                        <p className="text-xs lg:text-base">Meu Palpite é um aplicativo onde o usuário pode registrar seus palpites nos jogos da Copa do Mundo 2022, também é possivel compartilhar seus palpites.</p>
                        <p className="text-xs lg:text-base">
                            <p>Projeto desenvolvido no evento Full Stack Challenge da Codar.me.</p>
                            <br></br>
                            <p>Tecnologias Utilizadas:</p>
                            <p>• Javascript</p>
                            <p>• NodeJS com Koa</p>
                            <p>• CSS e HTML com Tailwind</p>
                            <p>• Banco de dados com Prisma e PlanetScale</p>
                        </p>
                        <p className="text-md font-bold text-blue-500 md:text-lg">Novembro de 2022</p>
                    </div>

                </div>

                <div className="flex justify-center p-4">
                    <div className="flex flex-row space-x-4 justify-center lg:justify-start">
                        <a href="https://meupalpite-web.vercel.app/" target="_blank" className="text-center font-bold text-blue-900 bg-gradient-to-r from-blue-100 to-blue-300 text-xs px-6 py-2 rounded-xl md:text-md">
                            Acessar Projeto
                        </a>
                        <a href="https://github.com/marvieiradev/meupalpite-web" target="_blank" className="text-center font-bold text-blue-100 border border-blue-100 text-xs px-6 py-2 rounded-xl md:text-md">
                            Acessar Repositório
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}