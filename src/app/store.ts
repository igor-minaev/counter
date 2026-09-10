import {loadState, saveState} from "@/common/utils/utilsLocalStorage";
import {counterReducer, initialCounterState} from "@/features/counter/model/counter-slice";
import {configureStore} from '@reduxjs/toolkit'


const persistedSettings = loadState()
const preloadedState = persistedSettings
    ? {
        counter: {
            ...initialCounterState,
            ...persistedSettings,
            counterValue: persistedSettings.startValue
        }
    }
    : undefined


export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    preloadedState
})

store.subscribe(() => {
    const {startValue, maxValue} = store.getState().counter
    saveState({startValue, maxValue})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
