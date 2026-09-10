const APP_STATE_KEY = 'app-state'

export type PersistedCounterSettings = {
    startValue: number
    maxValue: number
}

export const loadState = ():PersistedCounterSettings | undefined => {
    try {
        const serializedState = localStorage.getItem(APP_STATE_KEY)
        if (serializedState === null) {
            return undefined
        }

        return JSON.parse(serializedState)

    } catch {
        return undefined
    }
}


export const saveState = (settings: PersistedCounterSettings) => {
    try {
        const serializedState = JSON.stringify(settings)

        localStorage.setItem(APP_STATE_KEY, serializedState)
    } catch {
        // Приложение продолжит работать без сохранения
    }
}
