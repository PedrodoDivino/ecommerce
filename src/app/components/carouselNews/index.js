import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: true,
    speed: 7000, 
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 500, 
    cssEase: "linear", 
    swipeToSlide: false, 
    touchMove: false, 
    arrows: false,
    pauseOnHover: false,
};

export default function CarouselNews() {
    return (
        <div className="w-full h-14 bg-gradient-to-r from-blue-200 to-indigo-500 border-spacing-1">
            <Slider {...settings}>
                <div>
                    <h3 className="text-center text-white">PROMOÇÃO 70% OFF</h3>
                </div>
                <div>
                    <h3 className="text-center text-white">BLACK ECOMMERCE</h3>
                </div>
                <div>
                    <h3 className="text-center text-white">SÓ AQUI</h3>
                </div>
                <div>
                    <h3 className="text-center text-white">teste</h3>
                </div>
            </Slider>
        </div>
    );
}
