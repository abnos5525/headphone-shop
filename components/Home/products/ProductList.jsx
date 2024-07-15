'use client'

import { useState, useEffect, useContext } from 'react'
import {
    useGetProductsMostViewedQuery,
    useGetProductsSalesQuery,
    useGetProductsCheapestQuery,
    useGetProductsPriceyQuery,
    useGetProductsSelectedQuery,
    useGetProductsQuery,
} from '@/redux/reducers/productApi'
import { Context } from '@/context/ContextApp'
import Page500 from "@/components/errors/Page500"
import { Pagination, Skeleton } from "@mui/material"
import ProductCard from "@/components/Home/products/ProductCard";
import _ from "lodash";

const ProductList = () => {
    const { products, setProducts } = useContext(Context)
    const [sortOption, setSortOption] = useState('')

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    // const [filteredProducts, setFilteredProducts] = useState([])

    const {
        data: productsData,
        isLoading: productsLoading,
        error: productsError,
        isFetching: productsFetching
    } = (() => {

        switch (sortOption) {
            case '':

                return useGetProductsQuery({ page })
            case 'views':

                return useGetProductsMostViewedQuery({ page })
            case 'sales':

                return useGetProductsSalesQuery({ page })
            case 'cheapest':

                return useGetProductsCheapestQuery({ page })
            case 'pricey':

                return useGetProductsPriceyQuery({ page })
            case 'selected':

                return useGetProductsSelectedQuery({ page })
            default:

                return useGetProductsQuery({ page })
        }
    })();

    const handlePageChange = (event, value) => {
        setPage(value);
    }

    useEffect(() => {
        if (productsData) {
            const products = productsData.data.filter(product => product.attributes.main_price > 0)
            setTotalPages(products.length)

            setProducts(products);
        }
    }, [productsData, setProducts]);

    const contactSearch= _.debounce((query)=>{

        if(!query) return setProducts([...products])
        setProducts(draft => draft.filter(c => c.attributes.title_fa.includes(query)))

    },1000)

    const sortStyle = 'block text-lg my-2 blue rounded py-1 text-white transition transform ' +
        'hover:scale-110 duration-300 cursor-pointer';

    if (productsError) return <Page500 />

    return (
        <div className="flex flex-wrap creamy rounded mx-5 mt-5 mb-8">
            <div className="lg:w-1/4 md:w-1/4 sm:w-full xs:w-full p-5 lg:sticky md:sticky top-0 self-start
            lg:border-l md:border-l border-gray-500 text-center">
                <label>جستجو:</label>
                <input onChange={event => contactSearch(event.target.value)} type="text" placeholder="جستجوی محصول..." className="m-2 rounded"/>
                <h4 className="font-bold mb-2 text-xl bg-blue-400 rounded pb-1 text-gray-800">دسته بندی براساس</h4>
                <hr className="border-gray-500" />
                <div>
                    <span onClick={() => setSortOption('')}
                          className={`${sortStyle} ${sortOption === '' ? 'blue_hover' : ''} `}>
                        همه
                    </span>
                    <span onClick={() => {
                        setPage(1)
                        setSortOption('cheapest')
                        }}
                          className={`${sortStyle} ${sortOption === 'cheapest' ? 'blue_hover' : ''} `}>
                        ارزان ترین ها
                    </span>
                    <span onClick={() => {
                        setPage(1)
                        setSortOption('views')
                    }}
                          className={`${sortStyle} ${sortOption === 'views' ? 'blue_hover' : ''} `}>
                        پربازدیدترین ها
                    </span>
                    <span onClick={() => {
                        setPage(1)
                        setSortOption('sales')
                    }}
                          className={`${sortStyle} ${sortOption === 'sales' ? 'blue_hover' : ''} `}>
                        پرفروش ترین ها
                    </span>
                    <span onClick={() => {
                        setPage(1)
                        setSortOption('pricey')
                    }}
                          className={`${sortStyle} ${sortOption === 'pricey' ? 'blue_hover' : ''} `}>
                        گرانترین ها
                    </span>
                    <span onClick={() => {
                        setPage(1)
                        setSortOption('selected')
                    }}
                          className={`${sortStyle} ${sortOption === 'selected' ? 'blue_hover' : ''} `}>
                        منتخب
                    </span>
                </div>
            </div>
            <div className="lg:w-3/4 md:w-3/4 sm:w-full xs:w-full p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    (productsLoading || productsFetching) ?
                        [...Array(6)].map((_, index) => (
                            <Skeleton key={index} variant="rectangular" color="gray"
                                      className="bg-gray-200 p-4 rounded relative pb-16"
                                      style={{ height: 260 }} />
                        ))
                        :
                        products?.map(product => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                }
            </div>
            <div className="w-full lg:w-3/4 p-5 flex justify-center text-center mx-auto">
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                    classes={{
                        ul: 'flex justify-center',
                        previous: 'transform rotate-180',
                        next: 'transform rotate-180',
                    }}
                />
            </div>
        </div>
    );
};

export default ProductList;
