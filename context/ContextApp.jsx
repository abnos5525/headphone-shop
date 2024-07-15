'use client'

import {createContext, useState} from "react";

export const Context = createContext()
export const ContextApp = ({ children }) => {

    const [drawerOpen, setDrawerOpen] = useState(false)
    const [productsHeader, setProductsHeader] = useState([])
    const [productsViewed, setProductsViewed] = useState([])
    const [products, setProducts] = useState([])

    return (
        <Context.Provider value={{
            drawerOpen,
            setDrawerOpen,

            productsHeader,
            setProductsHeader,
            productsViewed,
            setProductsViewed,
            products,
            setProducts
        }}>
            {children}
        </Context.Provider>
    )
}