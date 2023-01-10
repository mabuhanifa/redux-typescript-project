import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
}

const storeSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
})






export default storeSlice;