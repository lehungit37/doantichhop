import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const useRandomKey = () => {
  const [key, setKey] = useState();

  React.useMemo(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    setKey(`${year}${month}${day}-${hour}${minute}${second}-${uuidv4()}`);
  }, []);
  return key;
};

export default useRandomKey;
