import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { db, storage } from "../../../../Firebase/config";
import { formatNumberMoney } from "../../../../Function";
import useFireStore from "../../../../Hooks/useFireStore";
import HeaderAdmin from "../HeaderAdmin";
const ProductAdminDetail = () => {
  const param = useParams();
  const { id } = param;

  const condtitionProduct = useMemo(() => {
    return {
      fieldName: "MaSp",
      operator: "==",
      compareValue: id,
    };
  }, [id]);

  const product = useFireStore("SanPham", condtitionProduct);

  const [valueProduct, setValueProduct] = useState();
  const [initValue, setInitValue] = useState();
  const [file, setFile] = useState([]);
  useEffect(() => {
    if (product) {
      setValueProduct({
        TenSp: product[0].TenSp,
        Gia: product[0].Gia,
        Size: product[0].Size.toString(),
        Hinh: product[0].Hinh,
        HinhLienQuan: product[0].HinhLienQuan,
        MaLoai: product[0].MaLoai,
        MaSp: product[0].MaSp,
        Description: product[0].Description,
      });
      setInitValue({
        TenSp: product[0].TenSp,
        Gia: product[0].Gia,
        Size: product[0].Size.toString(),
        Hinh: product[0].Hinh,
        HinhLienQuan: product[0].HinhLienQuan,
        MaLoai: product[0].MaLoai,
        MaSp: product[0].MaSp,
        Description: product[0].Description,
      });
    }
  }, [product]);

  const categories = useFireStore("LoaiHang", null);
  const [isEdit, setIsEdit] = useState(false);
  const handleOnEdit = () => {
    setIsEdit(true);
  };

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setValueProduct({
      ...valueProduct,
      [name]: value,
    });
  };

  const handleOnChangeFile = (e) => {
    const arrImage = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      arrImage.push(newFile);
    }
    setFile(arrImage);
  };
  const handleCancel = () => {
    setIsEdit(false);
    setValueProduct(initValue);
  };
  const handleOk = async () => {
    const storageRef = storage.ref();

    var arrImgURL = [];
    if (file.length !== 0) {
      for (let i = 0; i < file.length; i++) {
        const imageRelatedRef = storageRef.child(`images/${file[i].name}`);
        await imageRelatedRef.put(file[i]);

        // eslint-disable-next-line no-loop-func
        await imageRelatedRef.getDownloadURL().then((url) => {
          arrImgURL.push(url);
        });
      }
    }
    else{
        arrImgURL = product[0].HinhLienQuan
    }
    

    const arrSize = valueProduct.Size.split(",");
    const MaSp = valueProduct.MaSp;
    const value = {
      TenSp: valueProduct.TenSp,
      Size: arrSize,
      Gia: Number(valueProduct.Gia),
      Hinh: arrImgURL[0],
      HinhLienQuan: arrImgURL,
      Description: valueProduct.Description,
      MaLoai: valueProduct.MaLoai,
      MaSp,
    };
    
      if (valueProduct.TenSp && valueProduct.Size && valueProduct.Description) {
        db.collection("SanPham")
          .doc(MaSp)
          .update(value)
          .then(() => {
            alert("update Success");
            setIsEdit(false);
          })
          .catch(() => {
            alert("update Fail");
          });
      }

   
  };
  const displayEditForm = () => {
    if (valueProduct) {
      return (
        <div div className="edit__product">
          <div className="img__product">
            <div className="main__img">
              <img src={valueProduct.Hinh} alt="" />
            </div>
            <div className="related__img">
              {valueProduct.HinhLienQuan?.map((value) => {
                return <img src={value} alt="" />;
              })}
            </div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Name Product</label>
              <input
                onChange={handleOnChangeInput}
                name="TenSp"
                value={valueProduct.TenSp}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Price Product</label>
              <input
                onChange={handleOnChangeInput}
                name="Gia"
                value={valueProduct.Gia}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Type Product</label>
              <select
                value={valueProduct.MaLoai}
                name="MaLoai"
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={handleOnChangeInput}
              >
                {categories?.map((item) => {
                  return <option value={item.MaLoai}>{item.TenLoai}</option>;
                })}
              </select>
            </div>

            <div className="input-group">
              <div className="custom-file">
                <input type="file" multiple onChange={handleOnChangeFile} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Size Product</label>
              <input
                value={valueProduct.Size.split(",")}
                name="Size"
                type="text"
                className="form-control"
                onChange={handleOnChangeInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Description Product
              </label>
              <textarea
                value={valueProduct.Description}
                name="Description"
                onChange={handleOnChangeInput}
                className="form-control"
                id="exampleFormControlTextarea1"
              />
            </div>
          </form>
        </div>
      );
    }
  };

  return (
    <div className="detail__product">
        <div className="header">
        <HeaderAdmin title="Detail Product" />
        <Link to = "/admin/product">
        <ion-icon name="arrow-back-outline"></ion-icon>
            Back to Product
        </Link>

        </div>
      <div className="content">
        {!isEdit && valueProduct ? (
          <>
            <div className="img__product">
              <div className="main__img">
                <img src={valueProduct.Hinh} alt="" />
              </div>
              <div className="related__img">
                {valueProduct.HinhLienQuan?.map((value) => {
                  return <img src={value} alt="" />;
                })}
              </div>
            </div>
            <div className="info__product">
              <h4 className="name__product">{valueProduct.TenSp}</h4>
              <div className="price__product">
                {formatNumberMoney(valueProduct.Gia)}
              </div>
              <div className="size__product">
                {valueProduct.Size.split(",")?.map((value) => {
                  return <span>{value}</span>;
                })}
              </div>
              <div className="description__product">
                {valueProduct.Description}
              </div>
              <div className="type__product">
                <select
                  value={valueProduct.MaLoai}
                  name=""
                  disabled={!isEdit}
                  id="input"
                  class="form-control"
                  required="required"
                >
                  {categories?.map((item) => {
                    return <option value={item.MaLoai}>{item.TenLoai}</option>;
                  })}
                </select>
              </div>

              <div className="btn btn-primary" onClick={handleOnEdit}>
                Edit
              </div>
            </div>
          </>
        ) : (
          displayEditForm()
        )}
      </div>
      {isEdit ? (
        <div className="btn__group">
          <div className="btn btn-primary" onClick={handleOk}>
            <i class="fa fa-check" aria-hidden="true"></i> OK
          </div>
          <div className="btn btn-primary" onClick={handleCancel}>
            <i class="fas fa-times"></i> Cancel
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductAdminDetail;
