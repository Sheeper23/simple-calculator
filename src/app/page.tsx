"use client"

// TODO: decimal functionality, % functionality, chain operations

import Keypad from "@/components/Keypad";
import NumberDisplay from "@/components/NumberDisplay";
import useArray from "@/utils/useArray";
import { useRef, useState } from "react";

export default function Home() {
  const {array, setArray, set} = useArray(["AC", "+/-", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="])
  const [display, setDisplay] = useState("0")
  const memory = useRef("0")
  const operation = useRef("")

  const onNumber = (val: string) => {
    setDisplay(display === "0" || display === "-0" ? val : display+val)
    set(0, "C")
  }

  const onOperation = (val: string) => {
    if (operation.current !== "" && memory.current !== "0"){
      onEquals()
    }
    operation.current = val
    memory.current = display
    setDisplay("0")
  }

  const onPlusMinus = () => {
    setDisplay(display.charAt(0) === "-" ? display.slice(1) : "-"+display)
  }

  const onPercent = () => {

  }

  const onClear = (val: string) => {
    if (val === "C") {
      setDisplay("0")
      set(0, "AC")
    }
    else {
      setDisplay("0")
      memory.current = "0"
      operation.current = ""
    }
  }

  const onEquals = () => {
    if (operation.current === "+") {
      setDisplay(""+(parseFloat(memory.current) + parseFloat(display)))
    }
    else if (operation.current === "-") {
      setDisplay(""+(parseFloat(memory.current) - parseFloat(display)))
    }
    else if (operation.current === "x") {
      setDisplay(""+(parseFloat(memory.current) * parseFloat(display)))
    }
    else if (operation.current === "÷") {
      setDisplay(""+(parseFloat(memory.current) / parseFloat(display)))
    }


    memory.current = "0"
    operation.current = ""
  }

  return (
    <main className="flex w-full grow justify-center items-center">
      <div className="flex flex-col h-[70%] aspect-[2/3] bg-backfill rounded-lg overflow-hidden">
        <NumberDisplay
        num={display}
        />
        <Keypad
        letters={array}
        onNumber={onNumber}
        onPlusMinus={onPlusMinus}
        onOperation={onOperation}
        onEquals={onEquals}
        onClear={onClear}
        />
      </div>
    </main>
  )
}
