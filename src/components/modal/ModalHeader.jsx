import React from "react"

export default function ModalHeader(props) {

    return (
        <div className="flex justify-center ">
            <iframe className="w-[300px] h-[180px] md:w-[400px] md:h-[250px] lg:w-[640px] lg:h-[360px]" src={props.link} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}