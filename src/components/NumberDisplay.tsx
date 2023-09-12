type NumberDisplayProps = {
    num: string
}

export default function NumberDisplay({
    num
}: NumberDisplayProps) {
    return (
        <div className="flex basis-1/4 justify-end items-end">
            <p className="text-white text-7xl mx-2 mb-2 select-none">{num}</p>
        </div>
    )
}