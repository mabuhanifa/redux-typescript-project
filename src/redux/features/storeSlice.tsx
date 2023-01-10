import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit/dist/createAsyncThunk";

interface MainState {
    products: [];
    cart: [];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}


const initialState = {
    products: [],
    cart: [],
    loading: 'idle',
}

const fetchProducts = createAsyncThunk(
    'store/products',
    async () => {
        const response = await fetch(``)
        return (await response.json())
    }
)

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})






export default storeSlice;