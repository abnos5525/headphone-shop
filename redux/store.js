import {configureStore} from "@reduxjs/toolkit";
import cartReducer, {getTotals} from "@/redux/reducers/cartSlice"
import {productApi} from "@/redux/reducers/productApi";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
})

store.dispatch(productApi.endpoints.getProducts.initiate())

// store.dispatch(populateCart())
store.dispatch(getTotals())
