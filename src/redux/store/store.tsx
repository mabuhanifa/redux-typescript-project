import { configureStore } from '@reduxjs/toolkit';
import storeReducer from '../features/storeSlice';
// ...
const store = configureStore({
    reducer: {
        store: storeReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export default store;