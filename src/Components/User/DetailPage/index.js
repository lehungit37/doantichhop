import React, { useEffect, useMemo, useState } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../../Context/UserProvider";
import { formatNumberMoney } from "../../../Function";
import useFireStore from "../../../Hooks/useFireStore";
import useRandomKey from "../../../Hooks/useRandomKey";
import './Detail.scss'

export default function DetailPage() {
  const match = useRouteMatch();
  //id product
  const { id } = match.params;

  const [activeImg, setActiveImg] = useState()
  const [activeSize, setActiveSize] = useState()
  const [value, setvalue] = useState()
  const [quantity, setQuantity] = useState(1)
  const conditionDetailProduct = useMemo(() => {
    return {
      fieldName: "MaSp",
      operator: "==",
      compareValue: id,
    };
  }, [id]);

  const detailProduct = useFireStore("SanPham", conditionDetailProduct);
  useEffect(()=>{
    if(detailProduct){
        detailProduct.map(item=>{
            setActiveImg(item.HinhLienQuan[0])
            setActiveSize(item.Size[0])
            setvalue(item)
        })
    }
  },[detailProduct])

  const {addToCart} = useContext(UserContext)

  const handleGetImgActive = (e)=>{
        const attr = e.target.attributes.src.value
        setActiveImg(attr)
  }
  const handleChangeSize = (e)=>{
    const size = e.target.attributes.name.value
    setActiveSize(size)
  }

  const handlePlusQuantity = ()=>{
    if(quantity === 10){
      alert("Số lượng đặt không quá 10 sản phẩm ")
    }
    else{
      setQuantity(quantity + 1)
    }
  }
  const handleMinusQuantity = ()=>{
    if(quantity === 1){
      alert("Số lượng đặt không ít hơn 1 sản phẩm ")
      setQuantity(1)
    }
    else{
      setQuantity(quantity - 1)
    }
  }

  const doc = useRandomKey()
  const handleAddToCart = ()=>{
      const data = {
        value,
        quantity,
        size: activeSize
      }
      addToCart(data, doc)
  }
  return (
    <>
      <div className="info__page">
        <div className="container">
          <div className="page__title">Detail-product</div>
          <ul>
            <li>
              <Link to="/">
                <i className="fa fa-home" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <a href>Detail-product</a>
            </li>
          </ul>
        </div>
      </div>
      {value ? (
        <div className="detail-product">
          <div className="container">
            <div className="box__product-img">
              <div className="product__img-main">
                <img src={activeImg} alt="clothes-shop" />
              </div>
              <div className="product__img-related">
                {value.HinhLienQuan ? value.HinhLienQuan.map((item) => {
                  return (
                    <div className="img-item"  >
                      <img src={item} alt="clothes-shop" onClick = {handleGetImgActive}  />
                    </div>
                  );
                }) : null}
              </div>
            </div>
            <div className="info-buy">
              <div className="info-product">
                <h3 className="name-product"> {value.TenSp}</h3>
                <span className="price-product">
                  {formatNumberMoney(value.Gia)}
                </span>
              </div>
              <div className="select-buy">
                <div className="select-size">
                  <h5>
                    Size: <span id="size">{activeSize}</span>
                  </h5>
                  <div className="list-size">
                      {
                          value.Size ? 
                          value.Size.map(item=>{
                              return  <div onClick ={handleChangeSize} name = {item}  className={activeSize === item ? "size-item active__size" : "size-item"} title={item}>
                              {item}
                            </div>
                          }) : null
                      }
                   
                   
                  </div>
                </div>
                <div className="quantity">
                  <h5>Quantity</h5>
                  <div className="form-quantity">
                    <div className="minus change"  onClick = {handleMinusQuantity}>
                      <i className="fa fa-minus" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      value = {quantity}
                      id="quantity"
                      disabled
                    />
                    <div className="plus change" onClick = {handlePlusQuantity}>
                      <i className="fa fa-plus" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <div className="list__btn">
                  <div className="btn btn-secondary" onClick = {handleAddToCart}>Add to cart</div>
                  <div className="btn btn-dark">
                    <a href>Buy it now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className = "loading">Loading ...</div>
      )}
      <div className="user-area">
        <div className="container">
          <ul className="list-tab">
            <li id="#tab-detail" className="control__tab active__control__tab ">
              Detail
            </li>
            <li id="#tab-delivery" className="control__tab">
              Delivery
            </li>
            <li id="#tab-review" className="control__tab">
              Review
            </li>
          </ul>
          <section>
            <div id="tab-detail" className="tab active__tab">
              <p>
                Blue Life's best selling Festival Romper features an update
                floral print with swiss dots throughout, smocked tube bodice
                with overlay detail, and a loose flowing skirt over shorts.
              </p>
              <ul>
                <li>Made in USA</li>
                <li>Dry Clean Only</li>
                <li>100% Rayon</li>
                <li>Model is 5ft 7 inches; Bust: 32”, Waist: 23”, Hips: 33”</li>
                <li>Model is wearing a size XS</li>
                <li>Relaxed Fit</li>
              </ul>
              <i>
                This store is a demo only, product available for purchase from{" "}
                <a href>Shop Planet Blue</a>
              </i>
            </div>
            <div id="tab-delivery" className="tab">
              <p>
                Delivery is free to all US destinations.
                <br />
                Please allow 2-3 days for regular shipping.
              </p>
              <p>
                Expedited shipping for a small cost may be selected at checkout
              </p>
            </div>
            <div id="tab-review" className="tab ">
              <form action>
                <h3>Write Your Review</h3>
                <div className="form_group">
                  <label htmlFor>Your Name </label>
                  <input
                    type="text"
                    name
                    id="input"
                    className="form-control"
                    defaultValue
                    required="required"
                    pattern
                    title
                  />
                </div>
                <div className="form_group">
                  <label htmlFor>Your Review </label>
                  <textarea
                    name
                    id="input"
                    className="form-control"
                    rows={3}
                    required="required"
                    defaultValue={""}
                  />
                </div>
                <div className="form_group">
                  <label htmlFor>Rating</label>
                  <div className="form-check form-check-inline">
                    <span>Bad</span>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rating"
                        id
                        defaultValue="checkedValue"
                      />
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rating"
                        id
                        defaultValue="checkedValue"
                      />
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rating"
                        id
                        defaultValue="checkedValue"
                      />
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rating"
                        id
                        defaultValue="checkedValue"
                      />
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rating"
                        id
                        defaultValue="checkedValue"
                      />
                    </label>
                    <span>Good</span>
                  </div>
                </div>
                <div className="btn btn-primary">Review</div>
              </form>
            </div>
          </section>
        </div>
      </div>
      {/*Sản phẩm tương tự*/}
      <div className="related-product">
        <div className="container">
          <div className="title">
            <h4>Related Product</h4>
          </div>
          <div className="product__list ">
            <div className="product__item">
              <div className="product__img">
                <a href>
                  <img src="./images/product2.jpg" alt="clothes-shop" />
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
                <div className="product__name">
                  <a href="#">Macbook</a>
                </div>
                <div className="product__price">$602.00</div>
              </div>
            </div>
            <div className="product__item">
              <div className="product__img">
                <a href>
                  <img src="./images/product2.jpg" alt="clothes-shop" />
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
                <div className="product__name">
                  <a href="#">Macbook</a>
                </div>
                <div className="product__price">$602.00</div>
              </div>
            </div>
            <div className="product__item">
              <div className="product__img">
                <a href>
                  <img src="./images/product2.jpg" alt="clothes-shop" />
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
                <div className="product__name">
                  <a href="#">Macbook</a>
                </div>
                <div className="product__price">$602.00</div>
              </div>
            </div>
            <div className="product__item">
              <div className="product__img">
                <a href>
                  <img src="./images/product2.jpg" alt="clothes-shop" />
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
                <div className="product__name">
                  <a href="#">Macbook</a>
                </div>
                <div className="product__price">$602.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
