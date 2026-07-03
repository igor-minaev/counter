import type {RootState} from "../../../store";

export const selectStartValue = (state: RootState): number => state.counter.startValue
export const selectMaxValue = (state: RootState): number => state.counter.maxValue
export const selectCounterValue = (state: RootState): number => state.counter.counterValue
export const selectSettingsMode = (state: RootState): boolean => state.counter.settingsMode
export const selectError = (state: RootState): boolean => state.counter.error