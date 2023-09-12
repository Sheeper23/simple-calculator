import { useState } from "react"

type KeyProps = {
    val: string
    onClick: (val: string) => void
}

export default function Key({
    val,
    onClick
}: KeyProps) {
    const [isClicked, setIsClicked] = useState(false)
    
    const click = () => {
        onClick(val)
    }

    const styling: React.CSSProperties = {
        width: val === "0" ? "50%" : "",
        backgroundColor: (val === "÷" || val === "+" || val === "x" || val === "-" || val === "=") ? "var(--operator-keys)" : ((val === "AC" || val === "C" || val === "+/-" || val === "%") ? "var(--editor-keys)" : ""),
        mixBlendMode: isClicked ? "multiply" : "normal"
    }

    return (
        <div
        style={styling}
        className="flex w-1/4 h-1/5 justify-center items-center border border-backfill box-border bg-numpad-keys"
        onMouseDown={() => {setIsClicked(true)}}
        onMouseLeave={() => {setIsClicked(false)}}
        onMouseUp={() => {isClicked && click(); setIsClicked(false)}}
        >
            <p className="text-white text-2xl select-none">{val}</p>
        </div>
    )
}