import React, { useContext, useState } from "react";
import { UserContext } from "../../../Context/UserProvider";
import firebase, { db } from "../../../Firebase/config";
import useRandomKey from "../../../Hooks/useRandomKey";
import Toask from "../Toask";
import Address from "./Address";
import "./CheckOut.scss";
import OrderDetail from "./OrderDetail";
import Payment from "./Payment";
import Review from "./Review";

const CheckOutPage = () => {
  const { myCart, uid } = useContext(UserContext);
  const step = [
    {
      number: 1,
      name: "Shipping Address",
    },
    {
      number: 2,
      name: "Payment Details",
    },
    {
      number: 3,
      name: "Review Your Order",
    },
  ];

  const [isActive, setIsActive] = useState(1);
  const [isComplete, setIsComplete] = useState(0);
  const [number, setNumber] = useState(1);
  const [message, setMessage] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [valueSelect, setValueSelect] = useState({
    city: 0,
    district: 0,
    ward: 0,
    name: "",
    phoneNumber: "",
    addressHouse: "",
  });
  const [nameCity, setNameCity] = useState();
  const [nameDistric, setNameDistric] = useState();
  const [nameWard, setNameWard] = useState();
  const [typePay, setTypePay] = useState(0);
  const [idOrder, setIdOrder] = useState();
  const address = {
    name: valueSelect.name,
    phoneNumber: valueSelect.phoneNumber,
    addressHouse: valueSelect.addressHouse,
    nameCity,
    nameDistric,
    nameWard,
  };
  const component = [
    <Address
      valueSelect={valueSelect}
      setValueSelect={setValueSelect}
      setNameCity={setNameCity}
      setNameDistric={setNameDistric}
      setNameWard={setNameWard}
    />,
    <Payment typePay={typePay} setTypePay={setTypePay} />,
    <Review myCart={myCart} address={address} />,
    <OrderDetail orderId={idOrder} />,
  ];

  //set order id
  const orderId = useRandomKey();
  var arrCart = [];

  myCart.forEach((item) => {
    arrCart.push(item.id);
  });
  const handleNextStep = () => {
    if (number <= 3) {
      if (checkAddress() === true) {
        setNumber(number + 1);
        setIsActive(number + 1);
        setIsComplete(isComplete + 1);
      } else {
        setMessage("Field is empty. Must full");
        setIsOpen(true);
      }
    }

    //set order
    if (number === 3) {
      const order = {
        myCart,
        address,
        uid,
        orderId,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
      };
      setIdOrder(orderId);
      db.collection("DonHang")
        .doc(orderId)
        .set(order)
        .then(() => {
          setMessage("Order success");
          setIsOpen(true);
          for (let i = 0; i < arrCart.length; i++) {
            db.collection("GioHang").doc(arrCart[i]).delete();
          }
        })
        .catch(() => {
          setMessage("Order Fail");
          setIsOpen(true);
        });
    }
  };

  const checkAddress = () => {
    if (
      valueSelect.addressHouse &&
      valueSelect.city &&
      valueSelect.district &&
      valueSelect.name &&
      valueSelect.phoneNumber &&
      valueSelect.ward
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleBackStep = () => {
    setNumber(number - 1);
    setIsActive(number - 1);
    setIsComplete(isComplete - 1);
  };
  const displayButton = () => {
    if (number > 1) {
      return (
        <div className="btn btn__back" onClick={() => handleBackStep()}>
          Back
        </div>
      );
    }
  };

  return (
    <div className="checkout">
      {isOpen ? (
        <Toask message={message} setIsOpen={setIsOpen} setError={setMessage} />
      ) : null}
      <div className="header">
        <h3>Check Out</h3>
        <div className="list__step">
          {step.map((item) => {
            return (
              <div className="item__step">
                <div
                  className={
                    item.number <= isActive
                      ? "number__step active"
                      : "number__step"
                  }
                >
                  {isComplete >= item.number ? (
                    <i class="fas fa-check"></i>
                  ) : (
                    <span>{item.number}</span>
                  )}
                </div>
                <div className="name__step">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="main">{component[number - 1]}</div>
      {number <= 3 ? (
        <div className="list__button">
          {displayButton()}
          <button
            className={
              checkAddress() ? "btn btn__next " : "btn btn__next btn__wait"
            }
            onClick={() => handleNextStep()}
            disabled={!checkAddress()}
          >
            {number >= 3 ? "Place order" : "Next"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CheckOutPage;
