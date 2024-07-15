import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://shopapi.ir/api/v1/digikala/category/products",
        prepareHeaders: (headers) => {
            headers.set('Authorization', process.env.NEXT_PUBLIC_PRODUCT_TOKEN);
            return headers;
        }
    }),
    endpoints:(builder) => ({
        getProducts: builder.query({
            query: ({ page = 1 } = {}) => `/headphone?page=${page}`,
        }),
        getProductsMostViewed: builder.query({
            query: ({ page = 1 } = {}) => `/headphone?page=${page}&sort=views`,
        }),
        getProductsSales: builder.query({
            query: ({ page = 1 } = {}) => `/headphone?page=${page}&sort=sales`,
        }),
        getProductsRecommended: builder.query({
            query: ({ page = 1 } = {}) => `/headphone?page=${page}&sort=recommended`,
        }),
        getProductsCheapest: builder.query({
            query: ({ page = 1 } = {}) => `/headphone?page=${page}&sort=cheapest`,
        }),
        getProductsPricey: builder.query({
            query: ({ page = 1 } = {}) => `/headphone?page=${page}&sort=pricey`,
        }),
        getProductsSelected: builder.query({
            query: ({ page = 1 } = {}) => `/headphone?page=${page}&sort=selected`,
        }),
    })
})

export const {
    useGetProductsQuery,
    useGetProductsMostViewedQuery,
    useGetProductsSalesQuery,
    useGetProductsCheapestQuery,
    useGetProductsPriceyQuery,
    useGetProductsSelectedQuery,
    useGetProductsRecommendedQuery
} = productApi;