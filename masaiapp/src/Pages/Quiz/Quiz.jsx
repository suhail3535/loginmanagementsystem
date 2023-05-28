import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Component/Navbar/Navbar";

import { useDispatch, useSelector } from "react-redux";
import style from "./Quiz.module.css";
import Filter from "../../Component/Filter/Filter";
import QuizCard from "../../Component/Card/QuizCard";
import { getRequestQuiz } from "../../Redux/Admin/actions";

const Lecture = () => {
    const newdata = useSelector((store) => store.AdminReducer.lecture);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRequestQuiz());
    }, []);

    return (
        <div id={style.main_div}>
            <Navbar />
            <div id={style.nav2_div}>
                <div id={style.heading_div}>
                    <h5>All Quizzes</h5>
                </div>
                <div id={style.btn_div}></div>
            </div>

            <Filter />

            <div>
                {newdata.map((ele) => (
                    <QuizCard key={ele.id} {...ele} />
                ))}
            </div>
        </div>
    );
};

export default Lecture;
