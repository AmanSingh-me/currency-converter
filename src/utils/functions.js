export const fetchData = async(api, dataFormat) => {
    try {
        const response = await fetch(api);
        const data = dataFormat.toLowerCase() === "json" ? await response.json() : await response.text()
        return data;
    }catch (error) {
        console.log(error)
    }
    
}

