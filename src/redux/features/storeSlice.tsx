import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductType = {
    id: number;
    title?: string;
    description?: string;
    price?: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images?: string[];
    quantity?: number;
}

interface MainState {
    products: ProductType[];
    cart: ProductType[];
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
}


const initialState = {
    products: [],
    cart: [],
    status: 'idle',
} as MainState;

export const fetchProducts = createAsyncThunk(
    'store/products',
    async () => {
        const response = await fetch(`https://dummyjson.com/products`)
        return (await response.json())
    }
)

const storeSlice = createSlice({
    name: 'store',

    initialState,

    reducers: {
        addToCart: (state, action: PayloadAction<ProductType>) => {
            state.cart = [...state.cart, action.payload]
        }

    },

    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'pending'
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.products = [];
            state.status = 'failed'
        });

    }
})


export const { addToCart } = storeSlice.actions;

export default storeSlice.reducer;