import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductType = {
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

export interface MainState {
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
        const response = await fetch(`https://dummyjson.com/products`);
        const data = await response.json();
        return data.products;
    }
)

const storeSlice = createSlice({
    name: 'store',

    initialState,

    reducers: {
        addToCart: (state, action: PayloadAction<ProductType>) => {
            state.cart = [...state.cart, action.payload]
        },
        removeFromCart: (state, action: PayloadAction<ProductType>) => {
            state.cart = state.cart.filter((c) => c.id !== action.payload.id)
        },
        changeQuantity: (state, action: PayloadAction<ProductType>) => {
            state.cart.filter((cart) => cart.id === action.payload.id ? cart.quantity = action.payload.quantity : cart.quantity);
            if (action.payload.quantity === 0) {
                state.cart = state.cart.filter((c) => c.id !== action.payload.id)
            }
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


export const { addToCart, removeFromCart, changeQuantity } = storeSlice.actions;

export default storeSlice.reducer;