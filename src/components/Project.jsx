import React from "react"

export default function Project(props) {

    return (
        <div className={`${props.classe} flex flex-col cursor-pointer mx-3 my-3 hover:scale-110 w-[300px] h-[200px] lg:w-96 lg:h-56 shadow-xl rounded-xl justify-center`} onClick={() => { setShowModal0(true) }}>
            <div className="flex flex-col bg-darker bg-opacity-70 justify-center items-center space-y-2 rounded-xl w-[300px] h-[200px] lg:w-96 lg:h-56 hover:opacity-0">
                <p className="text-xl shadow-3xl">{props.titulo}</p>
                <div className="flex flex-row item-center space-x-2">

                    <img className={`w-[20px] ${props.cls1}`} src={`./images/skills/${props.img1}.svg`} />
                    <img className={`w-[20px] ${props.cls2}`} src={`./images/skills/${props.img2}.svg`} />
                    <img className={`w-[20px] ${props.cls3}`} src={`./images/skills/${props.img3}.svg`} />
                    <img className={`w-[20px] ${props.cls4}`} src={`./images/skills/${props.img4}.svg`} />
                    <img className={`w-[20px] ${props.cls5}`} src={`./images/skills/${props.img5}.svg`} />

                </div>
            </div>
        </div>
    )
}