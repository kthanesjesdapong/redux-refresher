import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.count -= action.payload;
        }
    },
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;


/*
The main difference between reduxToolKit vs redux is for one we dont have to individually define the state/reducer/action

Within reduxToolKit we can have all of these live inside of the createSlice / slice
    1. This allows for more concise code that is cleaner.


    A.The name field will take in the name of the slice
    B.The initialState will take in the initial state of the slice
    C. Reducer Object
        I. Anything that lives inside of this object be anything that interacts with the state. (actions/ reducers that modify it)
        II. IncrementByAmount / DecrementByAmount 
            -Notice how in these two actions theres not only a state being passed in but an action as well. 
            - In these two we want to modify by a specific amount and that amount is being passed in by our button.


// export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;
    is us destructuring all of these actions off of our counterSlice.actions Objects

    If you want the reducer just use export default counterSlice.reducer;

*/