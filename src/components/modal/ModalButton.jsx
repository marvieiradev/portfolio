import React from "react"
import { CircleX } from "lucide-react"

export default function ModalButton(props) {

    return (
        <div className="flex justify-end z-31">
            <button className="no-title text-base lg:text-lg text-white px-2 mb-2"><CircleX /></button>
        </div>
    )
}