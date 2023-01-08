import { useEffect, useState } from "react"

const BitcoinIndex = ({ currency="AUD" }) => {
    let [price, setPrice] = useState(0)

    // Mount and update
    useEffect(() => {
        console.log("useEffect triggered")
    })

    // Mount and currency change
    useEffect(() => {
        fetch(`http://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
            .then((res) => res.json())
            .then((data) => setPrice(data.bpi[currency].rate_float))
    }, [currency])

    // Mount and price update only
    useEffect(() => {
        console.log("useEffect on price update")
    }, [price])

    return (
        <>
            <h1>Bitcoin Index</h1>
            {price > 0 ? <h3>Current Price: {currency} {price}</h3> : <h3>Loading ...</h3>}
        </>
    )
}

export default BitcoinIndex