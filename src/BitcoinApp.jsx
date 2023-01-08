import BitcoinIndex from "./BitcoinIndex"
import CurrencySelector from "./CurrencySelector"
import { useState } from "react"

const BitcoinApp = () => {
    const [currency, setCurrency] = useState("AUD")

    return (
        <>
            <BitcoinIndex currency={currency} />
            <CurrencySelector currency={currency} setCurrency={setCurrency} />
        </>
    )
}

export default BitcoinApp