
import React from 'react'
import $ from 'jquery'
export default function NewTrend() {

    const handleClick = (e) =>{
        const idTab =  e.target.id
        $(".small__menu__item").removeClass('active__small__menu')
        const classTab = idTab.replace('#', ".")
        $(classTab).addClass('active__small__menu') 
        $('.trend__block').removeClass('active__tab')
        $(idTab).addClass('active__tab')       
    }
    return (
        <div className="new__trend">
            <div className="container">
                <div className="title">
                    <h4>News trend</h4>
                    <p>Check out the best offers to stay in Trend</p>
                </div>
                <ul className="small__menu">
                    <li onClick = {handleClick} id="#tab-featured" className="small__menu__item tab-featured active__small__menu "><i className="fas fa-paper-plane" />Featured</li>
                    <li onClick = {handleClick} id="#tab-latest" className="small__menu__item tab-latest"><i className="fa fa-cubes" /> Latest</li>
                    <li onClick = {handleClick} id="#tab-special" className="small__menu__item tab-special"><i className="fas fa-chart-area" />Special</li>
                    <li onClick = {handleClick} id="#tab-bestseller" className="small__menu__item tab-bestseller"><i className="fa fa-heart" />Bestseller</li>
                </ul>
                <div className="trend__block active__tab " id="tab-featured">
                    <div className="product__list ">
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product1.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product1.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product1.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product1.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product1.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product1.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product1.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product1.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trend__block" id="tab-latest">
                    <div className="product__list ">
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product2.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product2.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product2.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product2.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product2.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product2.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product2.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product2.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trend__block" id="tab-special">
                    <div className="product__list ">
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product3.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product3.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product3.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product3.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product3.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product3.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product3.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product3.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trend__block" id="tab-bestseller">
                    <div className="product__list ">
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product4.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product4.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product4.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product4.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product4.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product4.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product4.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                        <div className="product__item">
                            <div className="product__img">
                                <a href>
                                    <img src="./images/product4.jpg" alt />
                                </a>
                                <div className="product__handle">
                                    <div className="btn__handle btn__addCart">
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn__handle btn__view">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                            <div className="infor">
                                <div className="product__name"><a href="#">Macbook</a></div>
                                <div className="product__price">
                                    $602.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
