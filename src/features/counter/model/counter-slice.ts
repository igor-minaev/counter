import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        startValue: 0,
        maxValue: 5,
        counterValue: 0,
        settingsMode: false,
        error: false
    },
    selectors: {
        selectStartValue: (state) => state.startValue,
        selectMaxValue: (state) => state.maxValue,
        selectCounterValue: (state) => state.counterValue,
        selectSettingsMode: (state) => state.settingsMode,
        selectError: (state) => state.error
    },
    reducers: (create) => ({
        increaseCounterAC: create.reducer((state, _) => {
            if (state.counterValue < state.maxValue) {
                state.counterValue = state.counterValue + 1
            }
        }),
        resetCounterAC: create.reducer((state, _) => {
            state.counterValue = state.startValue
        }),
        setSettingsAC: create.reducer<{ startValue: number, maxValue: number, }>((state, action) => {
            state.startValue = action.payload.startValue
            state.maxValue = action.payload.maxValue
            state.counterValue = action.payload.startValue
            state.settingsMode = false
            state.error = false
        }),
        setSettingsModeAC: create.reducer<{ mode: boolean }>((state, action) => {
            state.settingsMode = action.payload.mode
        }),
        setErrorAC: create.reducer<{ error: boolean }>((state, action) => {
            state.error = action.payload.error
        })
    })
})

export const {
    selectMaxValue,
    selectStartValue,
    selectCounterValue,
    selectError,
    selectSettingsMode
} = counterSlice.selectors

export const {setErrorAC, setSettingsAC, setSettingsModeAC, resetCounterAC, increaseCounterAC} = counterSlice.actions

export const counterReducer = counterSlice.reducer




