import React from "react"

export default function ModalHeader(props) {

    return (
        <div className="flex flex-col justify-start">
            <iframe className="w-[300px] h-[180px] md:w-[426px] md:h-[240px] lg:w-[560px] lg:h-[320px] xl:w-[600px] xl:h-[340px]" src={props.link + "?autoplay=1&loop=1&mute=1&controls=0"} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <p className="text-center p-2">(Vídeo de demonstração)</p>
        </div>
    )
}