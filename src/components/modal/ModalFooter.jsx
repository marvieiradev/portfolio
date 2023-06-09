import React from "react"

export default function ModalFooter(props) {

    return (
        <div className="flex justify-center p-4">
            <div className="flex flex-row space-x-4 justify-center lg:justify-start">
                <a href={props.linkbtn1} target="_blank" className={`${props.clsbtn1} text-center font-bold text-blue-900 bg-gradient-to-r from-blue-100 to-blue-300 text-xs px-6 py-2 rounded-xl md:text-md`}>
                    {props.txtbtn1}
                </a>
                <a href={props.linkbtn2} target="_blank" className={`${props.clsbtn2} text-center font-bold text-blue-100 border border-blue-100 text-xs px-6 py-2 rounded-xl md:text-md`}>
                    {props.txtbtn2}
                </a>
            </div>
        </div>
    )
}