import React from "react"

export default function ModalBody(props) {

    return (
        <div className="flex flex-col justify-center p-4 space-y-2 lg:justify-start">
            <h1 id="md-title" className="titles text-2xl text-center font-bold text-blue-300 lg:text-2xl">{props.titulo}</h1>
            <p className="text-xs text-justify lg:text-base">{props.subtitulo}</p>
            <p className="text-xs lg:text-base" dangerouslySetInnerHTML={{ __html: props.infos }}></p>
            <p className="text-md font-bold text-blue-500 md:text-lg">{props.data}</p>
        </div>
    )
}