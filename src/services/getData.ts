import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Products, ProdutComments, Comment } from '../types'

type CommentInterface = {
    id: string
    body: Comment
}

export const etherialApi = createApi({
    reducerPath: 'etherialApi',
    tagTypes: ['comments'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<Products[], void>({
            query: () => `products`,
        }),
        getProductComments: builder.query<ProdutComments[], string>({
            query: (id) => `products/${id}/comments`,
            providesTags: ['comments'],
        }),
        sendProductComment: builder.mutation<string, CommentInterface>({
            query: ({ id, body }) => ({
                url: `products/${id}/comments`,
                method: 'POST',
                body,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: ['comments'],
        }),
    }),
})

export const {
    useGetProductsQuery,
    useGetProductCommentsQuery,
    useSendProductCommentMutation,
} = etherialApi
