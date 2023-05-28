import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar/Navbar";
import Navbar2 from "../Component/Navbar/Navbar2";
import style from "./Login/Login.module.css";
import axios from "axios";

import StudentCard from "../Component/Card/StudentCard";
const Home = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        axios
            .get("https://shy-puce-lemming-tux.cyclic.app/schedule")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Navbar />
            <Navbar2 />
             <div id={style.datadiv}>
                {data.length > 0 ? (
                    data.map((ele) => <StudentCard key={ele.id} {...ele} />)
                ) : (
                    <div id={style.empty}></div>
                )}
            </div>
        </div>
    );
};

export default Home;
