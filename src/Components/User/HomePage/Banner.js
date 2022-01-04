import React from 'react'

export default function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner__list">
                    <div className="banner__item short__banner ">
                        <a href="#">
                            <img src="./images/banner-1.jpg" alt />
                            <div className="intro__banner">
                                <h1>watches<br />collection</h1>
                            </div>
                        </a>
                    </div>
                    <div className="banner__item long__banner text-left">
                        <img src="./images/banner-2.jpg" alt />
                        <div className="intro__banner">
                            <h1>60% off for you<br />men collection</h1>
                            <div className="btn__view">
                                <a href="#">View more</a>
                            </div>
                        </div>
                    </div>
                    <div className="banner__item long__banner text-right ">
                        <img src="./images/banner-3.jpg" alt />
                        <div className="intro__banner">
                            <h1>30% off for you<br />glasses collection</h1>
                            <div className="btn__view">
                                <a href="#">View more</a>
                            </div>
                        </div>
                    </div>
                    <div className="banner__item short__banner">
                        <a href="#">
                            <img src="./images/banner-4.jpg" alt />
                            <div className="intro__banner">
                                <h1>latest<br />backpack</h1>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
