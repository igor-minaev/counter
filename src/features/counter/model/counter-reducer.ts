import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    startValue: 0,
    maxValue: 5,
    counterValue: 0,
    settingsMode: false,
    error: false
}

export const increaseCounterAC = createAction('counter/increaseCounter')
export const resetCounterAC = createAction('counter/resetCounter')
export const setSettingsAC = createAction<{ startValue: number, maxValue: number }>('counter/setSettings')
export const setSettingsModeAC = createAction<{ mode: boolean }>('counter/setSettingsMode')
export const setErrorAC = createAction<{ error: boolean }>('counter/setErrorAC')


export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(increaseCounterAC, (state, _) => {
            if (state.counterValue < state.maxValue) {
                state.counterValue = state.counterValue + 1
            }
        })
        .addCase(resetCounterAC, (state, _) => {
            state.counterValue = state.startValue
        })
        .addCase(setSettingsAC, (state, action) => {
            state.startValue = action.payload.startValue
            state.maxValue = action.payload.maxValue
            state.counterValue = action.payload.startValue
            state.settingsMode = false
            state.error = false
        })
        .addCase(setSettingsModeAC, (state, action) => {
            state.settingsMode = action.payload.mode
        })
        .addCase(setErrorAC, (state, action) => {
            state.error = action.payload.error
        })
})