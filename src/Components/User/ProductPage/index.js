import React, { useContext, useEffect, useMemo, useState } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { formatNumberMoney } from "../../../Function";
import useFireStore from "../../../Hooks/useFireStore";
import ProductsItem from "../ProductsItem";
import "./ProductPage.scss";
import $ from "jquery";

export default function ProductPage() {
  const match = useRouteMatch();
  const idParams = match.params.id;
  const { slug } = match.params;
  const [pageActive, setPageActive] = useState(1);
  const startProduct = Number(pageActive * 9 - 8);
  const endProduct = Number(pageActive * 9);
  const conditionProduct = useMemo(() => {
    if (slug === "search") {
      return null;
    } else {
      return {
        fieldName: "MaLoai",
        operator: "==",
        compareValue: idParams,
      };
    }
  }, [idParams, slug]);

  var LoaiHang = useFireStore("LoaiHang", null);
  var SanPham = useFireStore("SanPham", conditionProduct);
  var product = [];
  var productInPage = [];
  if (SanPham) {
    if (slug === "search") {
      product = SanPham.filter(
        (item) =>
          item.TenSp.toLowerCase().indexOf(idParams.toLowerCase()) !== -1
      );
    } else {
      product = SanPham;
    }
  }
  if (product) {
    for (let i = startProduct - 1; i <= endProduct; i++) {
      if (product[i]) {
        productInPage.push(product[i]);
      }
    }
  }
  const handleChangeActivePage = (e) => {
    const { value } = e.target;
    setPageActive(Number(value));
  };
  const displayPage = (sumNumber) => {
    const sumPage = Math.ceil(sumNumber / 8);
    console.log(sumPage);
    var arr = [];
    for (let i = 1; i <= sumPage; i++) {
      arr.push(
        <button
          onClick={handleChangeActivePage}
          className={pageActive === i ? "page__item active" : "page__item"}
          value={i}
        >
          {i}
        </button>
      );
    }
    return arr
  };
  const [priceFilter, setPriceFilter] = useState(0);
  const [activeSort, setActiveSort] = useState(false);
  const [sort, setSort] = useState({
    by: "default",
    value: 1,
    title: "Default",
  });

  //set title
  useEffect(() => {
    $(".title").text(sort.title);
  }, [sort.title]);

  // set price max and min filter
  var priceMin, priceMax;

  if (product && product.length) {
    let cloneProduct = product;
    priceMin = cloneProduct[0].Gia;
    priceMax = cloneProduct[0].Gia;

    cloneProduct.forEach((item) => {
      if (item.Gia > priceMax) priceMax = item.Gia;
      else if (item.Gia < priceMin) priceMin = item.Gia;
    });
  }
  //sort price and name

  if (product) {
    switch (sort.by) {
      case "name":
        product.sort((a, b) => {
          if (a.TenSp > b.TenSp) return sort.value;
          else if (a.TenSp < b.TenSp) return -sort.value;
          else return 0;
        });
        break;
      case "price":
        product.sort((a, b) => {
          if (a.Gia > b.Gia) return sort.value;
          else if (a.Gia < b.Gia) return -sort.value;
          else return 0;
        });
        break;
      default:
      // product = product;
    }
  }

  //uncomment
  React.useMemo(() => {
    setPriceFilter(priceMax);
  }, [priceMax]);

  const handleOnChangeFilter = (e) => {
    const value = e.target.value;
    setPriceFilter(parseInt(value));
  };

  const handleOnClickSort = (by, value, title) => {
    setSort({
      by,
      value,
      title,
    });
    setActiveSort(false);
  };

  return (
    <>
      <div className="info__page">
        <div className="container">
          <div className="page__title">Women</div>
        </div>
      </div>
      <div className="main">
        <div className="container ">
          <div className="control">
            <div className="list__control">
              <div className="item__control" id="categories">
                <h3>Categories</h3>
                <ul>
                  {LoaiHang
                    ? LoaiHang.map((item) => {
                        return (
                          <li>
                            <Link
                              key={item.id}
                              to={`/product/${item.TenLoai}/${item.id}`}
                            >
                              {item.TenLoai}
                            </Link>
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
              <div className="item__control" id="filter">
                <h3>Filter</h3>
                <form action>
                  <div className="form-group">
                    <label htmlFor="my-input">Price</label>
                    <input
                      id="my-input"
                      className="form-control-range"
                      onChange={handleOnChangeFilter}
                      type="range"
                      name="filterPrice"
                      min={priceMin}
                      max={priceMax}
                      step={(priceMax - priceMin) / 10}
                      value={priceFilter}
                    />
                    <span className="range__price text-center w-100">
                      {formatNumberMoney(priceFilter)}
                    </span>
                  </div>
                </form>
              </div>
              <div className="item__control" id="refine-search">
                <h3>Refine Seach</h3>
                <div className="sidebar__contant">
                  <div className="filter__group-main">
                    <h5>Color</h5>
                    <div id="filer-group-1">
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue={1}
                            name="filter[]"
                          />
                          <span>Red</span>
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue={2}
                            name="filter[]"
                          />
                          <span>Blue</span>
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue={3}
                            name="filter[]"
                          />
                          <span>Black</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="filter__group-main">
                    <h5>Size</h5>
                    <div id="filer-group-1">
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue={4}
                            name="filter[]"
                          />
                          <span>Large</span>
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue={5}
                            name="filter[]"
                          />
                          <span>Medium</span>
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue={6}
                            name="filter[]"
                          />
                          <span>Small</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="filter__group-main">
                    <h5>Brand</h5>
                    <div id="filer-group-1">
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue={1}
                            name="filter[]"
                          />
                          <span>Polo</span>
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue={2}
                            name="filter[]"
                          />
                          <span>Channel</span>
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue={3}
                            name="filter[]"
                          />
                          <span>Gucci</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="btn btn-danger btn-refine-search">
                    Refine Search
                  </div>
                </div>
              </div>
            </div>
            <div className="panner">
              <div className="item">
                <a href>
                  <img src="./images/left-banner2-277x404.jpg" />
                </a>
              </div>
            </div>
          </div>
          <div className="products">
            <div className="sort">
              <span>Sort by</span>
              <div className="select-item">
                <div
                  className="sort__title"
                  onClick={() => setActiveSort(!activeSort)}
                >
                  <span className="title"> </span>
                  <ion-icon
                    className="icon"
                    name="chevron-down-outline"
                  ></ion-icon>
                </div>
                <ul
                  className={
                    activeSort ? "sort__list active__sort" : "sort__list"
                  }
                >
                  <div
                    className="sort__item"
                    onClick={(by, value, title) =>
                      handleOnClickSort("default", 1, "Default")
                    }
                  >
                    Default
                    {sort.by === "default" ? (
                      <div className="icon__check">
                        <ion-icon name="checkmark-outline"></ion-icon>
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="sort__item"
                    onClick={(by, value, title) =>
                      handleOnClickSort("name", 1, "Name A to Z")
                    }
                  >
                    Name A <ion-icon name="arrow-forward-outline"></ion-icon> Z
                    {sort.by === "name" && sort.value === 1 ? (
                      <div className="icon__check">
                        <ion-icon name="checkmark-outline"></ion-icon>
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="sort__item"
                    onClick={(by, value, title) =>
                      handleOnClickSort("name", -1, "Name Z to A")
                    }
                  >
                    Name Z <ion-icon name="arrow-forward-outline"></ion-icon> A
                    {sort.by === "name" && sort.value === -1 ? (
                      <div className="icon__check">
                        <ion-icon name="checkmark-outline"></ion-icon>
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="sort__item"
                    onClick={(by, value, title) =>
                      handleOnClickSort("price", 1, "Price Low to Hight")
                    }
                  >
                    Price Low <ion-icon name="arrow-forward-outline"></ion-icon>{" "}
                    Hight
                    {sort.by === "price" && sort.value === 1 ? (
                      <div className="icon__check">
                        <ion-icon name="checkmark-outline"></ion-icon>
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="sort__item"
                    onClick={(by, value, title) =>
                      handleOnClickSort("price", -1, "Price Hight to Low")
                    }
                  >
                    Price Hight
                    <ion-icon name="arrow-forward-outline"></ion-icon> Low
                    {sort.by === "price" && sort.value === -1 ? (
                      <div className="icon__check">
                        <ion-icon name="checkmark-outline"></ion-icon>
                      </div>
                    ) : null}
                  </div>
                </ul>
              </div>
            </div>
            <div className="product__list">
              {productInPage && productInPage.length !== 0 ? (
                // eslint-disable-next-line array-callback-return
                productInPage.map((item) => {
                  if (item.Gia <= priceFilter) {
                    return <ProductsItem value={item} key={item.id} />;
                  }
                })
              ) : (
                <div className="notice"> Không có sản phẩm cần tìm</div>
              )}
            </div>

            <div className="page">
              <div className="page__list">
                {product ? displayPage(product.length) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
