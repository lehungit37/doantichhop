import React, { useContext, useState } from "react";
import useFireStore from "../../../../Hooks/useFireStore";
import "./Category.scss";
import { v4 } from "uuid";
import { db } from "../../../../Firebase/config";

const CategoryAdmin = () => {
  const categories = useFireStore("LoaiHang", null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [error, setError] = useState();
  const [action, setAction] = useState("");
  const initValue = {
    idCategory: "",
    nameCategory: "",
  };
  const [valueModal, setValueModal] = useState(initValue);
  
  const handleAddCategory = () => {
    handleOpenModal();
    setAction("add");
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setAction("");
    setValueModal(initValue);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleEdit = (id, value) => {
    handleOpenModal();
    setAction("edit");
    setValueModal({
      idCategory: id,
      nameCategory: value,
    });
  };

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setValueModal({
      ...valueModal,
      nameCategory: value,
    });
  };

  const handleSubmitOrEdit = () => {
    if (action === "add") {
      if (valueModal.nameCategory === "") {
        setError("Vui Lòng điền đầy đủ nội dung");
      } else {
        setError("");
        const id = v4();
        console.log(id);
        db.collection("LoaiHang")
          .doc(id)
          .set({
            MaLoai: id,
            TenLoai: valueModal.nameCategory,
          })
          .then(() => {
            alert("Thêm loại hàng thành công");
          })
          .catch(() => alert("Thêm loại hàng thất bại"));

        setValueModal(initValue);
      }
    }
    else if(action === "edit"){
      if (valueModal.nameCategory === "") {
        setError("Vui Lòng điền đầy đủ nội dung");
      } else {
        setError("");
        const id = valueModal.idCategory
       
        db.collection("LoaiHang")
          .doc(id)
          .update({
            TenLoai: valueModal.nameCategory
          })
          .then(() => {
            alert("Cập nhật loại hàng thành công");
          })
          .catch(() => alert("Cập nhật loại hàng thất bại"));

        setValueModal(initValue);
      }
    }
    handleCloseModal();
  };
  const handleDeleteCategory = (id) => {
    db.collection("LoaiHang")
      .doc(id)
      .delete()
      .then(() => alert("Xoá Loại Hàng thành công"))
      .catch(() => alert("Xoá loại hàng thất bại"));
  };
  return (
    <div className="category">
      <header>
        <h4 className="nama__component">Category</h4>
        <div className="btn btn-primary" onClick={handleAddCategory}>
          <ion-icon name="add-outline"></ion-icon> Add New Category
        </div>
      </header>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>ID Category Item</th>
            <th>Name Category Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories ? (
            categories.map((item, index) => {
              return (
                <tr>
                  <td> {index + 1}</td>
                  <td>{item.MaLoai}</td>
                  <td>{item.TenLoai}</td>

                  <td className="control">
                    <div className="icon">
                      <i class="fas fa-ellipsis-v"></i>
                    </div>
                    <div className="list__action">
                      <div
                        className="action__item"
                        onClick={(id, value) =>
                          handleEdit(item.MaLoai, item.TenLoai)
                        }
                      >
                        <ion-icon name="create-outline"></ion-icon> Edit
                      </div>
                      <div
                        className="action__item"
                        onClick={(id) => handleDeleteCategory(item.MaLoai)}
                      >
                        <ion-icon name="trash-outline"></ion-icon> Delete
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <div className="notice">Loading ...</div>
          )}
        </tbody>
      </table>

      {isOpenModal ? (
        <>
          <div className="overlay" onClick={handleCloseModal}></div>
          <div className="modal__category">
            <h4>{action === "add" ? "Add new Categories" : "Edit Category"}</h4>
            <div className="form">
              {action === "edit" ? (
                <div className="form__group">
                  <label>ID Category</label>
                  <input readOnly disabled value={valueModal.idCategory} />
                </div>
              ) : null}
              <div className="form__group">
                <label>Name Categories</label>
                <input
                  placeholder="Input Name Category"
                  value={valueModal.nameCategory}
                  onChange={handleChangeInput}
                />
                <span className="error">
                  {valueModal.nameCategory !== "" ? null : error}
                </span>
              </div>
            </div>

            <div className="btn__group">
              <div className="btn btn-primary" onClick={handleSubmitOrEdit}>
                <ion-icon name="create-outline"></ion-icon>
                {action === "edit" ? "Edit" : "Add"}
              </div>
              <div className="btn btn-primary" onClick={handleCloseModal}>
                {" "}
                <ion-icon name="close-outline"></ion-icon> Cancel
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CategoryAdmin;
