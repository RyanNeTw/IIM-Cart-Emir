import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { etherialApi } from './services/getData'
import { cartSlice } from './services/productSlice'

export const store = configureStore({
    reducer: {
        [etherialApi.reducerPath]: etherialApi.reducer,
        [cartSlice.reducerPath]: cartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(etherialApi.middleware),
})

setupListeners(store.dispatch)
