import React, { useEffect, useMemo, useState } from "react";

const Address = (props) => {
    const {valueSelect, setValueSelect, setNameCity,
      setNameDistric,
      setNameWard} = props
  const [city, setCity] = useState();
  const [district, setDistrict] = useState();
  const [ward, setWard] = useState();
 


  // useMemo(()=>{
  //     setValueAddress({
  //       city: nameCity,
  //       district: nameDistric,
  //       ward: nameWard,
  //       name: valueSelect.name,
  //       phoneNumber:valueSelect.phoneNumber,
  //       addressHouse: valueSelect.addressHouse
  //     })
  // }, [valueSelect, setValueAddress, nameWard, nameDistric, nameCity])

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValueSelect({
      ...valueSelect,
      [name]: value,
    });
  };
  // get API city
  useEffect(() => {
    const fetchData = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch("https://provinces.open-api.vn/api/p/", requestOptions)
        .then((response) => response.text())
        .then((result) => setCity(JSON.parse(result)))
        .catch((error) => console.log("error", error));
    };
    fetchData();
  }, []);

  //set name city
  useEffect(() => {
    const fetchData = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch(`https://provinces.open-api.vn/api/p/${valueSelect.city}`, requestOptions)
        .then((response) => response.text())
        .then((result) => setNameCity(JSON.parse(result).name))
        .catch((error) => console.log("error", error));
    };
    fetchData();
  }, [valueSelect.city]);

  //getApi distric
  useEffect(() => {
    if (valueSelect.city) {
      const paramDistrict = `https://provinces.open-api.vn/api/p/${valueSelect.city}?depth=2`;
      const fetchData = async () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        await fetch(paramDistrict, requestOptions)
          .then((response) => response.text())
          .then((result) => setDistrict(JSON.parse(result)))
          .catch((error) => console.log("error", error));
      };
      fetchData();
    }
  }, [valueSelect.city]);

  //set name distric && getAPI ward
  useEffect(() => {
    if (valueSelect.district) {
      const paramWard = `https://provinces.open-api.vn/api/d/${valueSelect.district}?depth=2`;
      const fetchData = async () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        await fetch(paramWard, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            setWard(JSON.parse(result))
            setNameDistric(JSON.parse(result).name)

          })
          .catch((error) => console.log("error", error));
      };
      fetchData();
    }
  }, [valueSelect.district]);

  //setNameWard
  useEffect(() => {
    if (valueSelect.ward) {
      const paramWard = `https://provinces.open-api.vn/api/w/${valueSelect.ward}?depth=3`;
      const fetchData = async () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        await fetch(paramWard, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            
            setNameWard(JSON.parse(result).name)

          })
          .catch((error) => console.log("error", error));
      };
      fetchData();
    }
  }, [valueSelect.ward]);

  return (
    <div className="addressShipping">
      <h4>Shipping Address</h4>
      <form>
        <div className="form__group">
          <input name = "name" value = {valueSelect.name} onChange = {handleOnChange}  className="long" placeholder="Nhập tên *" required />
        </div>
        <div className="form__group">
          <input name = "phoneNumber" value = {valueSelect.phoneNumber} onChange = {handleOnChange} className="long" placeholder="Số điện thoại *" required />
        </div>
        <div className="form__group">
          <input name = "addressHouse"  value = {valueSelect.addressHouse} onChange = {handleOnChange} className="short" placeholder="Số nhà *" required />
        </div>
        <div className="form__group">
          <div className="form__item short">
            <span>City</span>
            <select name="city" value = {parseInt(valueSelect.city)} onChange={handleOnChange}>
              <option value = {0}>Tỉnh / Thành phố</option>
              {city
                ? city.map((item) => {
                    return <option value={item.code}>{item.name}</option>;
                  })
                : null}
            </select>
          </div>
          <div className="form__item">
            <span>District</span>
            <select name="district" value = {parseInt(valueSelect.district)} onChange={handleOnChange}>
              <option  value = {0}>Quận / Huyện</option>
              {district
                ? district.districts.map((item) => {
                    return <option value={item.code}>{item.name}</option>;
                  })
                : null}
            </select>
          </div>
          <div className="form__item short">
            <span>Ward</span>
            <select name="ward" value = {parseInt(valueSelect.ward)} onChange={handleOnChange}>
              <option  value = {0}>Xã / Phường</option>
              {ward
                ? ward.wards.map((item) => {
                    return <option value={item.code}>{item.name}</option>;
                  })
                : null}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Address;
