import React, { useMemo, useState } from "react";
import HeaderAdmin from "../HeaderAdmin";
import ModalOrder from "./ModalOrder";
import useFireStore from "../../../../Hooks/useFireStore";
import "./OrderAdmin.scss";
import { formatNumberMoney } from "../../../../Function";
import { db } from "../../../../Firebase/config";

const OrderAdmin = () => {
  const [modal, setModal] = useState(false);
  const [orderItem, setOrderItem] = useState();
  const orders = useFireStore("DonHang", null);
  const [isEdit, setIsEdit] = useState(false);
  const [idOrder, setIdOrder] = useState();
  const [idCartIttem, setIdCartItem] = useState();
  const [status, setStatus] = useState();
  const convertArr = [];

  const orderCondition = useMemo(() => {
    return {
      fieldName: "orderId",
      operator: "==",
      compareValue: idOrder,
    };
  }, [idOrder]);
  const orderAction = useFireStore("DonHang", orderCondition);
  //convert order to detail
  if (orders) {
    orders.map((item) => {
      item.myCart.map((value) => {
        const orderItem = {
          address: item.address,
          value: value,
          id: item.id,
          createAt: item.createAt,
        };

        convertArr.unshift(orderItem);
      });

      return null;
    });
  }

  //sort type isCheck
  convertArr.sort((a, b) => {
    if (a.value.isCheck > b.value.isCheck) return 1;
    else if (a.value.isCheck < b.value.isCheck) return -1;
    else return 0;
  });
  const formatID = (id) => {
    const arr = id.split("-");

    return `${arr[0]}...`;
  };

  const formatTime = (seconds) => {
    const time = new Date(seconds * 1000);
    time.toLocaleDateString();
    const date = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();

    return `${date}/${month}/${year}`;
  };

  const handleViewDetail = (idOrder, idOrderItem) => {
    setModal(true);
    const orderSelect = convertArr.filter(
      (item) => item.id === idOrder && item.value.id === idOrderItem
    );
    setOrderItem(orderSelect);
    setIdOrder(idOrder);
    setIdCartItem(idOrderItem);
  };

  const handleEdit = (idOrder, idOrderItem) => {
    setModal(true);
    const orderSelect = convertArr.filter(
      (item) => item.id === idOrder && item.value.id === idOrderItem
    );
    setOrderItem(orderSelect);
    setIsEdit(true);
    setIdOrder(idOrder);
    setIdCartItem(idOrderItem);
  };

  const handleAcceptEdit = () => {
    if (orderAction) {
      const cloneOrderDEdit = orderAction[0].myCart;

      const index = cloneOrderDEdit.findIndex(
        (item) => item.id === idCartIttem
      );
      if (status !== null) {
        cloneOrderDEdit[index].isCheck = Number(status);
      }
      db.collection("DonHang")
        .doc(idOrder)
        .update({
          myCart: cloneOrderDEdit,
        })
        .then(() => {
          alert("Edit success");
        })
        .catch((error) => {
          alert("Edit Fail");
        });
    }
  };

  const displayStatus = (isCheck) => {
    const check = Number(isCheck);
    if (check === 0) return "Waiting";
    else if (check === 1) return "Shipping";
    else return "Success";
  };
  const displayClassStatus = (isCheck) => {
    const check = Number(isCheck);
    if (check === 0) return "status waiting";
    else if (check === 1) return "status shipping";
    else return "status success";
  };
  return (
    <>
      <HeaderAdmin title="Order" />
      <div className="order__modal">
        {modal ? (
          <ModalOrder
            handleAcceptEdit={handleAcceptEdit}
            orderAction={orderAction}
            setStatus={setStatus}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            orderItem={orderItem}
            formatTime={formatTime}
            setModal={setModal}
          />
        ) : null}
      </div>
      <div className="order">
        <h4>Order List</h4>
        <div className="list__order">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Order ID</th>
                <th scope="col">Billing Name</th>
                <th scope="col">Date</th>
                <th scope="col">Total</th>
                <th scope="col">Payment Status</th>
                <th scope="col">View Detail</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {convertArr
                ? // eslint-disable-next-line array-callback-return
                  convertArr.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td className="id__order">{formatID(item.id)}</td>
                        <td className="user__shipping">
                          <img
                            src="https://png.pngtree.com/png-vector/20190221/ourmid/pngtree-female-user-vector-avatar-icon-png-image_691506.jpg"
                            alt=""
                          />
                          <div className="name">{item.address.name}</div>
                        </td>
                        <td>{formatTime(item.createAt.seconds)}</td>
                        <td>
                          {formatNumberMoney(
                            item.value.quantity * item.value.value.Gia
                          )}
                        </td>
                        <td>
                          <span
                            className={displayClassStatus(item.value.isCheck)}
                          >
                            {displayStatus(item.value.isCheck)}
                          </span>
                        </td>
                        <td>
                          <span
                            className="primary"
                            onClick={(idOrder, idOrderItem) => {
                              handleViewDetail(item.id, item.value.id);
                            }}
                          >
                            View Detail
                          </span>
                        </td>
                        <td className="control">
                          <div className="icon">
                            <i class="fas fa-ellipsis-v"></i>
                          </div>
                          <div className="list__action">
                            <div
                              className="action__item"
                              onClick={(idOrder, idOrderItem) => {
                                handleEdit(item.id, item.value.id);
                              }}
                            >
                              <ion-icon name="create-outline"></ion-icon> Edit
                            </div>
                           
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderAdmin;
