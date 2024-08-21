import React from "react"

export default function Skill(props) {

    return (
        <div className="cursor-pointer hover:scale-110 flex flex-col mx-2 my-2 items-center space-y-3 py-3 bg-gradient-to-b from-darker to-darkerlight rounded-br-xl rounded-tl-xl border-b-4 border-blue-500  h-[130px] w-[90px] lg:h-[160px] lg:w-[120px]">
            <p className="text-sm text-blue-100 ml-0 mr-0 md:text-md lg:text-lg "><span>{props.text}</span></p>
            <img src={`./images/skills/${props.logo}.svg`} className="h-[60px] lg:h-[70px]" />
        </div>
    )
}