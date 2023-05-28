import React, { useEffect } from "react";

import Navbar from "../../Component/Navbar/Navbar";


import style from "./Assignment.module.css";
import Card2 from "../../Component/Card/Card2";
import Filter2 from "../../Component/Filter/Filter2";
import { useDispatch, useSelector } from "react-redux";
import { getRequestAssisgnment } from "../../Redux/Admin/actions";

const Assignment = () => {
    const dispatch = useDispatch();
    const newdata = useSelector((store) => store.AdminReducer.lecture);

    useEffect(() => {
        dispatch(getRequestAssisgnment());
    }, []);

    return (
        <div>
            <Navbar />
            <div id={style.nav2_div}>
                <div id={style.heading_div}>
                    <h5>Assignments</h5>
                </div>
                <div id={style.btn_div}></div>
            </div>
            <Filter2 />
            <div>
                {newdata.map((ele) => (
                    <Card2 key={ele.id} {...ele} />
                ))}
            </div>

            <div id={style.pagination}>
                <div id={style.totalItems}></div>
            </div>
        </div>
    );
};

export default Assignment;
