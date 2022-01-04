import React, { useState } from "react";
import { db, storage } from "../../../../Firebase/config";
import useFireStore from "../../../../Hooks/useFireStore";
import { v4 } from "uuid";

const ProductAdminAdd = () => {
  const categories = useFireStore("LoaiHang", null);
  const initValue = {
    TenSp: "",
    Gia: "",
    Hinh: "",
    HinhLienQuan: [],
    Size: "",
    Description: "",
    MaLoai: "",
  };
  const [product, setProduct] = useState(initValue);
  
  const [multiImages, setMultiImages] = useState();

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

 

  const handleOnChangrMultiImg = (e) => {
    const arrImage = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      arrImage.push(newFile);
    }

    setMultiImages(arrImage);
  };
  
  const handleSubmitAddProduct = async () => {
    const storageRef = storage.ref();
   
    var arrImgURL = [];
    if (multiImages.length) {
      for (let i = 0; i < multiImages.length; i++) {
        const imageRelatedRef = storageRef.child(
          `images/${multiImages[i].name}`
        );
        await imageRelatedRef.put(multiImages[i]);

        await imageRelatedRef.getDownloadURL().then((url) => {
          arrImgURL.push(url);
        });
      }
    }

    

    const arrSize = product.Size.split(",");

    
      if (product.TenSp && product.Size && product.Description && product.Gia) {
        if(product.Gia > 0){

          const id = v4();
          const value = {
            TenSp: product.TenSp,
            Size: arrSize,
            Gia: Number(product.Gia),
            Hinh: arrImgURL[0],
            HinhLienQuan: arrImgURL,
            Description: product.Description,
            MaLoai: product.MaLoai,
            MaSp: id,
          };
          db.collection("SanPham")
            .doc(id)
            .set(value)
            .then(() => {
              alert("Thêm sản phẩm thành công");
              setProduct(initValue)
            })
            .catch(() => {
              alert("Thêm sản phẩm thất bại");
            })
        }
        else{
          alert("Giá không nhỏ hơn 1")
        }

      } else {
        alert("Vui lòng điền đầy đủ thông tin");
      }
    
  };

  return (
    <div className="add__product">
      <header>
        <h4 className="nama__component">Product</h4>
      </header>
      <div className="new__product">
        <h4>Add new Product</h4>
        <form action="" onSubmit={handleSubmitAddProduct}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name Product</label>
            <input
              value={product.TenSp}
              onChange={handleOnChangeInput}
              name="TenSp"
              type="text"
              className="form-control"
              placeholder="Enter name product"
              required = {true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Price Product</label>
            <input
              type="number"
              min={0}
              value={product.Gia}
              onChange={handleOnChangeInput}
              name="Gia"
              className="form-control"
              placeholder="Enter price product"
              required = {true}

            />
          </div>
         
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Main and Related Image Product</label>
            <input
              type="file"
              onChange={handleOnChangrMultiImg}
              name="HinhLienQuan"
              className="form-control"
              multiple
              placeholder="Enter price product"
              required = {true}

            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Size Product</label>
            <input
              type="text"
              value={product.Size}
              onChange={handleOnChangeInput}
              name="Size"
              className="form-control"
              placeholder="Vui lòng ngăn cách Size bằng dấu ','"
              required = {true}

            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Type Product</label>
            <select
              className="form-control"
              name="MaLoai"
              onChange={handleOnChangeInput}
            >
              {categories
                ? categories.map((item) => {
                    return (
                      <option key={item.MaLoai} value={item.MaLoai}>
                        {item.TenLoai}
                      </option>
                    );
                  })
                : null}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Description Product</label>
            <textarea
              onChange={handleOnChangeInput}
              value={product.Description}
              className="form-control"
              name="Description"
              placeholder="Nhập mô tả chi tiết sản phẩm "
              required = {true}

            />
          </div>
          <div className="btn btn-primary" onClick={handleSubmitAddProduct}>
            Add new Product
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductAdminAdd;
