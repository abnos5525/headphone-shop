'use client'

import CustomNumber from "@/utils/CustomNumber";
import Slider from "react-slick";
import {NextArrow,PrevArrow} from './CustomArrows'
import {useContext} from "react";
import {Context} from "@/context/ContextApp";
import {Skeleton} from "@mui/material";
const HomeSlider = () => {

    const settings = {
        dots: false,
        speed: 2000,
        autoplay:true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        rtl: true,
        cssEase: "linear",
        arrows: true,
        infinite: true,
        focusOnSelect:false,
        nextArrow: <PrevArrow />,
        prevArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 768, // اندازه صفحه متوسط
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 640, // اندازه صفحه کوچک
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480, // اندازه صفحه بسیار کوچک
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ]
    }

    const {productsViewed} = useContext(Context)


    const latestProducts = productsViewed.slice(0,20)
    return(
        <div className="relative">
            <h4 className="absolute right-10 z-20 py-2 font-bold text-white">
                پربازدیدترین ها
            </h4>
            {
                productsViewed.length <=0 ?
                    <div className="text-center bg-red-500 px-10 pb-5 py-10 my-1 mx-5 rounded h-96 grid grid-cols-4 gap-2">
                        {[...Array(4)].map((_, index) => (
                            <Skeleton
                                key={index}
                                variant="rectangular"
                                height="96%"
                                className="rounded"
                            />
                        ))}
                    </div>
                    :
                    <Slider {...settings} className="text-center bg-red-500 px-10 pb-5 py-10 my-1 mx-5 rounded h-96">
                        {
                            latestProducts.map(product => (
                                <div key={product.attributes.title_fa} className="relative bg-white text-center cursor-pointer
                         border-l-8 border-l-red-500 rounded h-96 rtl">
                                    <img src={`${product.attributes.featured_image}`}
                                         className="w-40 text-center mx-auto py-1"/>
                                    <p className="text-center font-bold">
                                        {product.attributes.title_fa.slice(0,36)}
                                    </p>
                                    <p className="pr-3 absolute right-0 bottom-32 font-bold">
                                        <CustomNumber
                                            value={product.attributes.main_price}
                                            thousandSeparator=","
                                            suffix={` هزار تومان `}
                                        />
                                    </p>
                                    <button className="absolute text-lg bg-red-400 w-fit text-white py-2 px-6 rounded-2xl
                               hover:bg-red-500 left-5 bottom-16">خرید</button>
                                </div>
                            ))
                        }
                    </Slider>
            }
        </div>
    )
}

export default HomeSlider