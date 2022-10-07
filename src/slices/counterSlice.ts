import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        set: (state, action: PayloadAction<number>) => {
            state.count = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, set } = counterSlice.actions

export default counterSlice.reducer
