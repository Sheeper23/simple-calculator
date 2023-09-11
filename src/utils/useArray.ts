import { useState } from 'react'

export default function useArray(arr: string[]) {
    const [array, setArray] = useState(arr)

    const set = (index: number, value: string) => {
        setArray(array.map((val, ind) => {
            return index != ind ? val : value
        }))
    }

    return {array, setArray, set}
}