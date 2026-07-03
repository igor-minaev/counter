export const getValuesFromLocalStorage = (key: 'startValue' | 'maxValue', defaultValue: number) => {
    const startValueAsString = localStorage.getItem(key)
    if (startValueAsString) {
        return JSON.parse(startValueAsString)
    }
    return defaultValue
}

export const setValuesToLocalStorage = (key: 'startValue' | 'maxValue', value: number) => {

    localStorage.setItem(key, JSON.stringify(value))
}