import React, { useEffect, useState } from "react";
import { formatNumberMoney } from "../../../../Function";

const ModalOrder = (props) => {
  const { handleAcceptEdit,setModal, orderItem, formatTime, isEdit, setIsEdit, setStatus } = props;
  var orderSelect;
  if (orderItem) {
    orderSelect = orderItem[0];
  }
  const [isCheck, setIsCheck] = useState()
  React.useEffect(()=>{
        setIsCheck(Number(orderSelect.value.isCheck))
  }, [orderSelect.value.isCheck])
  
  const handleOffModal = () => {
    setModal(false);
    setIsEdit(false);
  };

  const handleOk = () => {
    handleAcceptEdit()
    setModal(false);
  };

  const formatAddress = (address) => {
    const { addressHouse, nameCity, nameDistric, nameWard } = address;
    return `${addressHouse}, ${nameWard}, ${nameDistric}, ${nameCity}`;
  };

  const handleOnChange = (e) => {
    const {  value } = e.target;
   
    setIsCheck(value)
    setStatus(Number(value))
  };
  return (
    <div className="my-modal">
      <div className="overlay" onClick={handleOffModal}></div>
      <div className="modal__form">
        <h4 className="header__form">Edit Order</h4>
        <form action="">
          <div className="form__group">
            <label htmlFor="">Order ID</label>
            <input
              type="text"
              disabled
              value={orderSelect ? orderSelect.id : null}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Billing Name</label>
            <input
              type="text"
              disabled
              value={orderSelect ? orderSelect.address.name : null}
              name=""
              id=""
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Address Receiver</label>
            <input
              type="text"
              disabled
              value={orderSelect ? formatAddress(orderSelect.address) : null}
              name=""
              id=""
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              disabled
              value={orderSelect ? orderSelect.address.phoneNumber : null}
              name=""
              id=""
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Date</label>
            <input
              type="text"
              disabled
              value={
                orderSelect ? formatTime(orderSelect.createAt.seconds) : null
              }
              name=""
              id=""
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Name Product</label>
            <input
              type="text"
              disabled
              value={orderSelect ? orderSelect.value.value.TenSp : null}
              name=""
              id=""
            />
          </div>
          <div className="form__group">
            <div className="size">
              <label htmlFor="">Size</label>
              <input
                type="text"
                value={orderSelect ? orderSelect.value.size : null}
                disabled
                name=""
                id=""
              />
            </div>
            <div className="quantity">
              <label htmlFor="">Qty</label>
              <input
                type="text"
                value={orderSelect ? orderSelect.value.quantity : null}
                disabled
                name=""
                id=""
              />
            </div>
          </div>
          <div className="form__group">
            <label htmlFor="">Total</label>
            <input
              type="text"
              value={
                orderSelect
                  ? formatNumberMoney(
                      orderSelect.value.quantity * orderSelect.value.value.Gia
                    )
                  : null
              }
              disabled
              name=""
              id=""
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Status</label>
            <select
              namme="status"
              onChange={handleOnChange}
              disabled={!isEdit}
              value={isCheck}
            >
              <option value={0}>Waiting</option>
              <option value={1}>Shipping</option>
              <option value={2}>Success</option>
              {/* <option value="2">Success</option> */}
            </select>
          </div>
          <div className="btn__group">
            {isEdit ? (
              <div className="btn btn-primary" onClick={handleOk}>
                {" "}
                OK
              </div>
            ) : null}
            <div className="btn btn-primary" onClick={handleOffModal}>
              <ion-icon name="close-outline"></ion-icon> Cancel
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalOrder;
