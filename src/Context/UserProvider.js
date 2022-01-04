import React from "react";
import { useHistory } from "react-router";
import { useContext, useMemo, useState } from "react/cjs/react.development";
import useFireStore from "../Hooks/useFireStore";
import { AuthContext } from "./AuthProvider";
import firebase, { db } from "../Firebase/config";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  var uid = null;
  if (currentUser) uid = currentUser.uid;
  const history = useHistory();
  const [stringSearch, setStringSearch] = useState();
  const [isOpenSmallCart, setIsOpenSmallCart] = useState(false);
  if (stringSearch) {
    history.push(`/product/search/${stringSearch}`);
  }

  const conditionMyCart = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "==",
      compareValue: uid,
    };
  }, [uid]);
  const myCart = useFireStore("GioHang", conditionMyCart);

  var subTotal = 0;
  var count = 0;
  if (myCart) {
    myCart.sort((a, b) => {
      if (a.id > b.id) return -1;
      else if (a.id < b.id) return 1;
      else return 0;
    });

    myCart.forEach((item) => {
      subTotal += item.quantity * item.value.Gia;
      count += item.quantity;
    });
  }

  const addToCart = (dataGet, doc) => {
    const { value, size, quantity } = dataGet;
    if (uid) {
      const newCart = [];
      myCart.forEach((item) => {
        //set count

        if (item.value.MaSp === value.MaSp && item.size === size)
          newCart.push(item);
      });

      if (newCart && newCart.length) {
        db.collection("GioHang")
          .doc(newCart[0].id)
          .update({
            quantity: newCart[0].quantity + dataGet.quantity,
          })
          .then(() => alert("Thêm giỏ hàng thành công"))
          .catch((error) => alert("Thêm giỏ hàng thất bại"));
      } else {
        const data = {
          uid,
          createAt: firebase.firestore.FieldValue.serverTimestamp(),
          value,
          size,
          quantity,
          isCheck: 0
        };
        db.collection("GioHang")
          .doc(doc)
          .set({
            ...data,
          })
          .then(() => alert("Thêm giỏ hàng thành công"))
          .catch(() => alert("Thêm giỏ hàng thất bại"));
      }
    } else {
      history.push("/login");
    }
  };

  const deletItemCart = (id) => {
    db.collection("GioHang").doc(id).delete();
  };

  const updateQuantityCartItem = async (
    idCartItem,
    quantityUpdate,
    quantity
  ) => {

    if (quantity  === 0) {
      db.collection("GioHang").doc(idCartItem).delete();
    } else {
      await db
        .collection("GioHang")
        .doc(idCartItem)
        .update({
          quantity: quantity,
        });
    }
  };
  return (
    <UserContext.Provider
      value={{
        stringSearch,
        setStringSearch,
        isOpenSmallCart,
        setIsOpenSmallCart,
        myCart,
        subTotal,
        count,
        uid,
        addToCart,
        deletItemCart,
        updateQuantityCartItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
