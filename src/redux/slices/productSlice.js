import { createSlice } from '@reduxjs/toolkit';

export const STATUS_ENUMS = Object.freeze({
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error"
})

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        status: STATUS_ENUMS.IDLE
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        },

    },
});


export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Middleware
export const fetchData = () => {
    return async function fetchProducts(dispatch, getState) {
        dispatch(setStatus(STATUS_ENUMS.LOADING))
        try {
            const data = await fetch("https://fakestoreapi.com/products/")
            const parsedData = await data.json();
            dispatch(setProducts(parsedData))
            dispatch(setStatus(STATUS_ENUMS.IDLE))
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUS_ENUMS.ERROR))
        }
    }

}