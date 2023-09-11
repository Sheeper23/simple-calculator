import Key from "./Key";

type KeypadProps = {
    letters: string[]
    onNumber: (val: string) => void
    onPlusMinus: () => void
    onOperation: (val: string) => void
    onEquals: () => void
    onClear: (val: string) => void
}

export default function Keypad({
    letters,
    onNumber,
    onPlusMinus,
    onOperation,
    onEquals,
    onClear
}: KeypadProps) {
    const onClick = (val: string) => {
        if ("1234567890".includes(val)) {
            onNumber(val)
        }
        else if (val === "+/-") {
            onPlusMinus()
        }
        else if ("+-x÷".includes(val)) {
            onOperation(val)
        }
        else if (val === "=") {
            onEquals()
        }
        else if (val === "AC" || val === "C") {
            onClear(val)
        }
    }

    return (
        <div className="flex grow flex-wrap">
            {
                letters
                .map((val, index) => (
                    <Key
                    key={index}
                    val={val}
                    onClick={onClick}
                    />
                ))
            }
        </div>
    )
}