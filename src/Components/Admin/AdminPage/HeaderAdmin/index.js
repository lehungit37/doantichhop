import React from 'react';
import './HeaderAdmin.scss'

const HeaderAdmin = ({title}) => {
    return (
        <header>
            <h4 className="nama__component">{title}</h4>
            {/* <div className="btn btn-primary"><ion-icon name="add-outline"></ion-icon> Add New Order</div> */}
        </header>
    );
}

export default HeaderAdmin;