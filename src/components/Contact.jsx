import React from "react"

export default function Contact(props) {

    return (
        <a href={props.link} target="_blank">
            <div className="hover:scale-110 flex flex-col items-center px-2 w-[150px]">
                <img src={`./images/contacts/${props.icone}.svg`} className="w-20 pb-2" />
                <h3>{props.titulo}</h3>
                <h3>{props.info}</h3>
            </div>
        </a>
    )
}