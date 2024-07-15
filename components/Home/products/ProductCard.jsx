import CustomNumber from "@/utils/CustomNumber";
import {Skeleton} from "@mui/material";
import {useInView} from "react-intersection-observer";

const ProductCard = ({ product }) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="bg-blue-200 p-4 rounded relative pb-16 cursor-pointer hover:bg-blue-300 transition duration-500">
            {
                !inView ?
                    <Skeleton variant="rectangular" color="gray"
                              className="bg-gray-200 p-4 rounded relative pb-16"
                              style={{height: 160, width: '100%'}}/>
                    :
                    <img src={`${product.attributes.featured_image}`}
                         className="w-40 text-center mx-auto py-1"/>
            }
            <p className="text-right font-bold">
                {product.attributes.title_fa}
            </p>
            <p className="font-bold text-left absolute bottom-0 left-3 py-5">
                <CustomNumber
                    value={product.attributes.main_price}
                    thousandSeparator=","
                    suffix={` هزار تومان `} />
            </p>
        </div>
    )
}

export default ProductCard