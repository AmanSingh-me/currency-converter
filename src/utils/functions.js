
export const fetchData = async(api, dataFormat) => {
    try {
        const response = await fetch(api);
        const data = dataFormat.toLowerCase() === "json" ? await response.json() : await response.text()
        return data;
    }catch (error) {
        console.error(error)
    }
    
}


export const exchangeAmount = (amount, exchangeRate) => {
    return amount > 0 ? (Number(amount) * Number(exchangeRate)).toFixed(3) : ""
} 

