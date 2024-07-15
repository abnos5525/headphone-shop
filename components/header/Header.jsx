'use client'

import { PersonOutline } from "@mui/icons-material";
import { useContext } from "react";
import { Context } from "@/context/ContextApp";
import dynamic from "next/dynamic";

const Header = () => {
    const anim_style = "transition transform hover:scale-110 hover:text-blue-700 duration-300 cursor-pointer";

    const { productsHeader } = useContext(Context);

    const LazyHeaderSlider = dynamic(() => import('@/components/header/HeaderSlider'), {
        ssr: false,
    })

    return (
        <header>
            <div className="w-11/12 text-center mx-auto right-0 left-0 shadow-blue-900 shadow-lg
                bg-white lg:h-24 md:h-24 sm:h-16 xs:h-16 rounded-lg p-5 absolute top-6 z-10">
                    <div className={`col-start-4 text-center lg:text-4xl md:text-2xl sm:text-2xl xs:text-xl
                        lg:mt-3 md:mt-3 sm:mt-1 xs:mt-1 ${anim_style}`}>
                        به وبسایت h-shop خوش آمدید
                    </div>
            </div>
            <div className="text-center bg-blue-500 px-5" style={{ height: "480px" }}>
                        <LazyHeaderSlider products={productsHeader} />
            </div>
        </header>
    );
}

export default Header;
