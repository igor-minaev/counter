import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    startValue: 0,

}


export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase()
})