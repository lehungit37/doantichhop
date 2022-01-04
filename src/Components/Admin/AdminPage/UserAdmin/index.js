import React, { useState } from "react";
import HeaderAdmin from "../HeaderAdmin";
import "./User.scss";
import useFireStore from "../../../../Hooks/useFireStore";
import ModalUser from "./ModalUser";

const UserAdmin = () => {
  const user = useFireStore("KhachHang", null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [valueEdit, setValueEdit] = useState();
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleEdit = (item) => {
    setIsOpenModal(true);
    setValueEdit(item);
  };
  return (
    <>
      <HeaderAdmin title="User" />
      {isOpenModal ? (
        <ModalUser
          setIsOpenModal={setIsOpenModal}
          handleCloseModal={handleCloseModal}
          valueEdit={valueEdit}
          setValueEdit = {setValueEdit}
        />
      ) : null}
      <div className="user">
        <h4>User List</h4>
        <div className="list__order">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Type Account</th>
                <th scope="col">Role</th>
                <th scope="col">View Detail</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {user?.map((item, index) => {
                if(item.role !== "admin"){

                  return (
                    <tr key={item.uid}>
                      <td>{index + 1}</td>
                      <td>{item.displayName}</td>
                      <td>{item.email}</td>
                      <td>{item.type}</td>
                      <td>{item.role}</td>
                      <td>
                        <span className="primary">View Detail</span>
                      </td>
                      <td className="control">
                        <div className="icon">
                          <i class="fas fa-ellipsis-v"></i>
                        </div>
                        <div className="list__action">
                          <div
                            className="action__item"
                            onClick={(value) => handleEdit(item)}
                          >
                            <ion-icon name="create-outline"></ion-icon> Edit
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserAdmin;
