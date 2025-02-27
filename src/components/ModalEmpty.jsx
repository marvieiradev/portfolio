import React from "react"
import { CircleX } from "lucide-react"

export default function ModalEmpty({ visible, onClose }) {
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
                    <div className="flex flex-col justify-center p-4 space-y-2 lg:justify-start">
                        <h1 id="md-title" className="titles text-2xl text-center font-bold text-blue-300 lg:text-2xl">Em breve!</h1>
                        <p className="text-xs text-justify lg:text-base leading-1">Projeto em desenvolvimento</p>
                    </div>
                </div>
            </div>
        </div>
    )
}