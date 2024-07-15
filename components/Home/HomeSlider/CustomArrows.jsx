import {ArrowLeftRounded, ArrowRightRounded} from "@mui/icons-material";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="slick-arrow slick-next"
            onClick={onClick}>
            <ArrowRightRounded />
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="slick-arrow slick-prev"
            onClick={onClick}>
            <ArrowLeftRounded />
        </div>
    );
};

export {NextArrow, PrevArrow}

