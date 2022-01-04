import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../../Firebase/config";
import { formatNumberMoney } from "../../../../Function";
import useFireStore from "../../../../Hooks/useFireStore";
import "./ProductAdmin.scss";

const ProductAdmin = () => {
  const products = useFireStore("SanPham", null);
  const categories = useFireStore("LoaiHang", null);

  const [pageActive, setPageActive] = useState(1);
  const [filterType, setFilterType] = useState("all");
  const startProduct = Number(pageActive * 8 - 7);
  const endProduct = Number(pageActive * 8);
  var productInPage = [];

  const handleChangeFilter = (e) => {
    const { value } = e.target;
    setFilterType(value);
  };
  var filterProduct
  if (products) {

    if(filterType === "all") filterProduct = products
    else{
      filterProduct = products.filter((item) => item.MaLoai === filterType)
    }
    for (let i = startProduct - 1; i <= endProduct - 1; i++) {
      if(filterProduct[i]){
        productInPage.push(filterProduct[i])
      }
    }
  }
  const handleChangeActivePage = (e) => {
    const { value } = e.target;
    setPageActive(Number(value));
  };
  const displayPage = (sumNumber) => {
    const sumPage = Math.ceil(sumNumber / 8);
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

    return arr;
  };

  const handleDeletetProduct = (idProduct)=>{
    db.collection("SanPham").doc(idProduct).delete().then(()=>{
      alert("Xoá sản phẩm thành công")
    }).catch(()=>{
      alert("Xoá sản phẩm thất bại")
    })
  }
  return (
    <div className="product__admin">
      <header>
        <h4 className="nama__component">Product</h4>
        <div className="btn btn-primary">
          <Link to="/admin/product/add">
            <ion-icon name="add-outline"></ion-icon> Add New Product
          </Link>
        </div>
      </header>

      <div className="product">
        <h4>Product List</h4>
        <div className="filter__type">
          <label htmlFor="">Type Product</label>
          <select name="filterType" id="" onChange={handleChangeFilter}>
            <option value="all">All Product</option>
            {categories ? (
              categories.map((item, index) => {
                return <option value={item.MaLoai}>{item.TenLoai}</option>;
              })
            ) : (
              <div className="notice">Loading ...</div>
            )}
          </select>
        </div>
        <div className="type__product"></div>
        <div className="product__list">
          {productInPage ? (
            productInPage.map((item) => {
              return (
                <div className="product__item">
                  <div className="product__img">
                    <img src={item.Hinh} alt="clothes-shop" />
                  </div>
                  <div className="product__info">
                    <div className="product__name">{item.TenSp}</div>
                    <div className="product__price">
                      {formatNumberMoney(item.Gia)}
                    </div>
                    <div className="btn__group d-flex">
                      <div className="btn btn-danger" onClick = {(idProduct)=>handleDeletetProduct(item.MaSp)}><ion-icon name="trash-outline"></ion-icon> Delete</div>
                    <Link to = {`/admin/product/detail/${item.TenSp}/${item.MaSp}`} className="btn btn-primary"><ion-icon name="eye-outline"></ion-icon> Detail</Link>

                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="notice">Không có sản phẩm nào !!!</div>
          )}
        </div>
      </div>

      <div className="page">
        <div className="page__list">
          {filterProduct ? displayPage(filterProduct.length) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductAdmin;
