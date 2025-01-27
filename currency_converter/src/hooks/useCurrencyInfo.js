import { useState, useEffect } from "react";

function useCurrencyInfo(currency = 'usd') {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(response => response.json())
            .then((data) => setData(data[currency]))


            .catch(error => console.error('Error:', error));
    }, [currency]);
    console.log(data)
    return data;
}

export default useCurrencyInfo;
