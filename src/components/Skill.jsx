import React from "react"

export default function Skill(props) {

    return (
        <div className="cursor-pointer hover:scale-110 flex flex-col mx-2 my-2 items-center space-y-3 py-3 px-2 lg:px-3 bg-darker rounded-br-xl rounded-tl-xl border-b-4 border-blue-500 w-[90px] lg:w-[120px]">
            <p className="text-md text-blue-100 ml-0 mr-0 lg:text-lg ">{props.text}</p>
            <img src={`./images/skills/${props.logo}.svg`} className="h-[61px] lg:h-[71px]" />
          </div>
    )
}