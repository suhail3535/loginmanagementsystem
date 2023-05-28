import React, { useEffect } from "react";

import style from "./AllLecture.module.css";
import Filter from "../Filter/Filter";
import AdminCard from "../Card/AdminCard";
import { getRequestLecture } from "../../Redux/Admin/actions";
import { useDispatch, useSelector } from "react-redux";

const AllLecture = () => {
    const dispatch = useDispatch();

    const newdata = useSelector((store) => store.AdminReducer.lecture);

    useEffect(() => {
        dispatch(getRequestLecture());
    }, []);

    return (
        <div id={style.maincont}>
            <div style={{ marginLeft: "60px" }}>
                <Filter />
            </div>

            <div id={style.schdle}>
                {newdata.length > 0 &&
                    newdata.map((ele) => <AdminCard key={ele.id} {...ele} />)}
            </div>

            <div id={style.pagination}>
                <div id={style.totalItems}></div>
                <div></div>
            </div>
        </div>
    );
};

export default AllLecture;
