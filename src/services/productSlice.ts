import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Product = {
    id: string
    index: number
    price: string
    title: string
    image: string
}

type CartState = {
    products: Product[]
}

const initialState: CartState = {
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            state.products = state.products.filter(
                (Products) => Products.index !== action.payload.index
            )
            console.log(action, state.products)
        },
    },
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer
