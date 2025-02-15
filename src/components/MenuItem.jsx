import React from "react"

export default function MenuItem(props) {

    return (
        <a href={props.link}>
            <div className="text-base md:text-lg bg-dark/50 hover:bg-dark p-1 md:px-4 text-white text-center font-bold md:gap-8 rounded-lg">
                <h2>{props.text}</h2>
            </div>
        </a>
    )
}