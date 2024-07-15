import Slider from "react-slick";
import CustomNumber from "@/utils/CustomNumber";

const HeaderSlider = ({products}) => {

    const settings = {
        dots: true,
        speed: 1000,
        autoplay:true,
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        arrows: false,
        focusOnSelect:false,
        appendDots: dots => (
            <div className="absolute bottom-10 w-fit">
                <ul className="m-0 p-0 flex justify-center"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-5 h-5 rounded-full bg-white inline-block"></div>
        )
    }

    const latestProducts = products.slice(0,3);

    return (
            <Slider {...settings} style={{height: "480px"}}>
                        {
                            latestProducts.map(product => (
                                <div key={product.attributes.title_fa} className="relative bg-blue-500 h-full">
                                    <div className="absolute lg:right-10 md:-right-32 sm:right-0 xs:right-0 sm:left-0 xs:left-0 sm:mx-auto xs:mx-auto lg:top-52 md:top-52 sm:top-72 xs:top-72 lg:text-right md:text-right sm:text-center xs:text-center font-bold w-8/12 rtl">
                                        <h3 className="lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl">
                                            {product.attributes.title_fa.slice(0,45)}
                                        </h3>
                                    </div>
                                    <p className="absolute lg:bottom-10 md:bottom-10 sm:-bottom-28 xs:-bottom-28 right-0 left-0 mx-auto rtl lg:text-2xl md:text-2xl sm:text-xl xs:text-xl font-bold">
                                        <CustomNumber
                                            value={product.attributes.main_price}
                                            thousandSeparator=","
                                            suffix={` هزار تومان `}
                                        />
                                    </p>
                                    <button className="absolute text-xl bg-amber-600 w-fit text-white py-2 px-8 rounded-full lg:top-72 md:top-72 lg:right-60 md:right-40 sm:top-96 xs:top-96 lg:mt-0 md:mt-0 xs:mt-2 sm:mt-2 lg:left-auto md:left-auto sm:mx-auto xs:mx-auto sm:right-0 xs:right-0 sm:left-0 xs:left-0
                           hover:bg-amber-500">خرید</button>
                                    <img src={`${product.attributes.featured_image}`} className="object-contain text-left lg:w-64 md:w-64 sm:w-40 xs:w-40 lg:mt-40 md:mt-40 sm:mt-28 xs:mt-28 lg:ml-28 md:ml-0 sm:mx-auto xs:mx-auto rounded-2xl"/>
                                </div>
                            ))
                        }
            </Slider>
    )
}

export default HeaderSlider
