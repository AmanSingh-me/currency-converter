export const locationBasedCurrency = "https://ipapi.co/currency";

export const getCurrencyList = "https://api.exchangerate.host/symbols" ;

export const createDynamic_ExchangeRateApi = (from, to) => {
    return `https://api.exchangerate.host/convert?from=${from}&to=${to}`   
}