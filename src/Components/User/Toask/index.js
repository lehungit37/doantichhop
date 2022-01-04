import React, {  useEffect } from "react";
import "./Toask.scss";
import $ from 'jquery'
export default function Toask({message, setError, setIsOpen}) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      $('.alert').empty()
      setIsOpen(false)
      setError("")
    }, 3000);

    return timeOut
  })
  return (
    <>
      <div
        className="alert alert__success alert-dismissible fade show"
        role="alert"
      >
          
        <p className = "alert__title">{message}</p>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick = {()=>setError("")}
        >
        </button>
      </div>
    </>
  );
}
