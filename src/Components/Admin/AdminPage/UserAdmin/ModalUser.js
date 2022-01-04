import React from "react";
import { db } from "../../../../Firebase/config";

const ModalUser = (props) => {
  const { handleCloseModal, valueEdit, setValueEdit } = props;

  const handleChangeRole = (e)=>{
    setValueEdit({
      ...valueEdit,
      role: e.target.value
    })
  }
  const handleAcceptEdit = () => {
    handleCloseModal();
    db.collection("KhachHang").doc(valueEdit.id).update({
      role: valueEdit.role
    }).then(()=> {
      alert("update permission success");
    }).catch((error)=>{
      alert(error.message);
    })
  };
  
  return (
    <div className="my-modal">
      <div className="overlay" onClick={handleCloseModal}></div>
      <div className="modal__form">
        <h4 className="header__form">Edit User</h4>
        <form action="">
          <div className="form__group">
            <label htmlFor="">Name User</label>
            <input
              type="text"
              disabled
              name=""
              id=""
              value={valueEdit.displayName}
            />
          </div>

          <div className="form__group">
            <label htmlFor="">Status</label>
            <select namme="status" defaultValue={valueEdit.role} onChange = {handleChangeRole}>
              <option value={"admin"}>Admin</option>
              <option value={"user"}>User</option>

              {/* <option value="2">Success</option> */}
            </select>
          </div>
          <div className="btn__group">
            <div className="btn btn-primary" onClick={handleAcceptEdit}>
              <ion-icon name="checkmark-outline"></ion-icon> OK
            </div>
            <div className="btn btn-primary" onClick={handleCloseModal}>
              <ion-icon name="close-outline"></ion-icon> Cancel
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalUser;
