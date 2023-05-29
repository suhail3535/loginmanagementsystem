import React from "react";
import style from "../Pages/Lecture/Lecture.module.css";
const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul id={style.pagination_ul}>
                {pageNumbers.map((number) => (
                    <button
                        id={style.clickButton}
                        onClick={() => paginate(number)}>
                        {number}
                    </button>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
