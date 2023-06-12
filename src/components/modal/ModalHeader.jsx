import React from "react"

export default function ModalHeader(props) {

    return (
        <div className="flex justify-center ">
            <iframe className="w-[300px] h-[180px] md:w-[426px] md:h-[240px] lg:w-[560px] lg:h-[320px] xl:w-[640px] xl:h-[360px]" src={props.link} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}