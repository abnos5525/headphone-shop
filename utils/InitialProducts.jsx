'use client';

import {
    useGetProductsMostViewedQuery,
    useGetProductsRecommendedQuery
} from "@/redux/reducers/productApi";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context/ContextApp";
import SpinnerPage from "@/utils/SpinnerPage";

const InitialProducts = ({ children }) => {
    const { data: recommendedData, isLoading: recommendedLoading, error: recommendedError } = useGetProductsRecommendedQuery();
    const { data: mostViewedData, isLoading: mostViewedLoading, error: mostViewedError } = useGetProductsMostViewedQuery();

    const { setProductsHeader, setProductsViewed } = useContext(Context);

    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        if (recommendedData) {
            setProductsHeader(recommendedData.data);
        }
        if (mostViewedData) {
            setProductsViewed(mostViewedData.data);
        }
        if (!recommendedLoading && !mostViewedLoading) {
            setLoadingComplete(true);
        }
    }, [recommendedData, mostViewedData, recommendedLoading, mostViewedLoading, setProductsHeader, setProductsViewed]);

    useEffect(() => {
        if (recommendedError || mostViewedError) {
            console.error('Failed to load products:', recommendedError || mostViewedError);
            setLoadingComplete(true);
        }
    }, [recommendedError, mostViewedError]);

    return (
        <>
            {!loadingComplete ? <SpinnerPage /> : <>{children}</>}
        </>
    );
};

export default InitialProducts;
