import React from 'react'

export default function Slide() {
    return (
        <div className="slide">
            <div className="slide__list">
                <div className="slide__item slide1 active__slide">
                    <img src="./images/slide1.jpg" alt />
                    <div className="intro active__intro">
                        <h5>XOSS SHOP</h5>
                        <h4>WOMEN'S NEW FASHION</h4>
                        <p>See our full collection.s summer 2016 Lookbook</p>
                        <a href="#">SHOP NOW</a>
                    </div>
                </div>
                <div className="slide__item slide2">
                    <img src="./images/slide2.jpg" alt />
                    <div className="intro ">
                        <h5>XOSS SHOP</h5>
                        <h4>WOMEN'S NEW FASHION</h4>
                        <p>See our full collection.s summer 2016 Lookbook</p>
                        <a href="#">SHOP NOW</a>
                    </div>
                </div>
            </div>
            <ul className="dot__list">
                <li className="dot__item active__dot" />
                <li className="dot__item" />
            </ul>
            <ul className="arrow__list">
                <li className="arrow__item btn__prev"><i className="fas fa-chevron-left" /></li>
                <li className="arrow__item btn__next"><i className="fas fa-chevron-right" /></li>
            </ul>
        </div>

    )
}
