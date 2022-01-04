import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';

const Location = () => {
    const [city, setCity] = useState([])
    const [distric, setDistric] = useState([])
    const [ward, setWard] = useState([])
    const header = {
        "Access-Control-Allow-Origin": "https://thongtindoanhnghiep.co/api",
"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
"Access-Control-Allow-Headers": "Content-Type"
    }
    useEffect(() => {
        const fetchData = async ()=>{
            axios({
                method: 'GET',
                url: "https://thongtindoanhnghiep.co/api/city",
                headers: header
            }).then(res=>{
                console.log(res);
            }).catch(error=>{
                console.log(error);
            })
        }
        fetchData()
    }, [])
    return (
        <>
            <select className = "location">
                
            </select>
            <select className = "location"></select>
            <select className = "location"></select>
        </>
    )
}


export default Location;