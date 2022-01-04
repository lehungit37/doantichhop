import React, { useEffect } from "react";
import Banner from "./Banner";
import Featured from "./Featured";
import Slide from "./Slide";
import "./HomePage.scss";
import NewTrend from "./NewTrend";
import Post from "./Post";
import Services from "./Services";

import { useAuth } from "../../../Context/AuthProvider";
import { useState } from "react/cjs/react.development";
export default function HomePage() {
  const {currentUser} = useAuth()
  const [user, setUser] = useState()
  useEffect(() => {
   setUser(currentUser)
  }, [currentUser])
 
  return (
    <>
     
      <Slide />
      <Banner />
      <Featured />
      <NewTrend />
      <Post />
      <Services />
    </>
  );
}
