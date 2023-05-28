import React, { useEffect } from "react";

import Navbar from "../../Component/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../Component/Card/Card";

import style from "./Lecture.module.css";
import { getRequestLecture } from "../../Redux/Admin/actions";

import Filter from "../../Component/Filter/Filter";

const Lecture = () => {
    const dispatch = useDispatch();

    const newdata = useSelector((store) => store.AdminReducer.lecture);

    useEffect(() => {
        dispatch(getRequestLecture());
    }, []);

    return (
        <div>
            <Navbar />
            <div id={style.nav2_div}>
                <div id={style.heading_div}>
                    <h5>Lectures</h5>
                </div>
                <div id={style.btn_div}></div>
            </div>

            <Filter />

            <div id={style.leacture_div}>
                {newdata.map((ele) => (
                    <Card key={ele.id} {...ele} />
                ))}
            </div>

            <div id={style.pagination}>
                <div id={style.totalItems}></div>
            </div>
        </div>
    );
};

export default Lecture;
