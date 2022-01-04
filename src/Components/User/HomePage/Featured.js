import React from 'react'
import Slider from "react-slick";
import ProductsItem from '../ProductsItem';

export default function Featured() {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div class="featured">
            <div className="container">
                <div className="title">
                    <h4>featured product</h4>
                    <p>Check out the best offers to stay in Trend</p>
                </div>
                <Slider {...settings} className="product__list">
                   <ProductsItem/>
                   <ProductsItem/>
                   <ProductsItem/>
                   <ProductsItem/>
                   <ProductsItem/>
                   <ProductsItem/>
                    
                </Slider>

            </div>
        </div>
    )
}
