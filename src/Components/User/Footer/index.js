import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="top__footer">
        <div className="container">
          <div className="list__footer">
            <div className="item__footer">
              <div className="title__fotter">
                <img src="./images/logo-2.png" alt />
              </div>
              <p>
                <span>Address: </span> 28 Green Tower, Street Name New York
                City, USA
              </p>
              <p>
                <span>Telephone: </span> 0355912653
              </p>
              <p>
                <span>Email: </span> phihung492000@gmail.com
              </p>
              <div className="social-icon">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="item__footer">
              <div className="title__footer">
                <h3>My Team</h3>
              </div>
              <ul>
                <li>Lê Phi Hùng</li>
                <li>Trần Văn Sơn</li>
                <li>Đinh Văn Vương</li>
                <li>Đoàn Mạnh Cường</li>
                <li>Huỳnh Văn Khánh</li>
              </ul>
            </div>

            <div className="item__footer">
              <div className="title__footer">
                <h3>NewsLetter</h3>
              </div>
              <p>Subscribe by our newsletter and get update protidin.</p>
              <div className="form__email">
                <input type="email" name id placeholder="Email Address" />
                <div className="btn btn-danger">
                  <a href>Subscribe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom__footer">
        <div className="container">
          <div className="coppyright">
            <p>
              2016 ® All Rights Reserved - <a href="#">BootExperts</a>{" "}
              Responsive Theme{" "}
            </p>
          </div>
          <div className="payment__method">
            <img src="./images/payment-method.png" alt="clothes-shop" />
          </div>
        </div>
      </div>
    </footer>
  );
}
