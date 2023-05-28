import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Component/Navbar/Navbar";
import {  useDispatch,useSelector } from "react-redux";

// later
import Card from "../../Component/Card/Card";
// import Pagination from "../../Component/Pagination";
import style from "./Lecture.module.css";
import { getRequestLecture } from "../../Redux/Admin/actions";
import { store } from "../../Redux/store";
import Filter from "../../Component/Filter/Filter";
// import Filter from "../../Component/Filter/Filter";

const Lecture = () => {
    const dispatch=useDispatch()
    const [data, setData] = useState([]);
    const [isFilterReset, setIsFilterReset] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setcategory] = useState("");
    const [instructure, setinstructure] = useState("");
    const [type, settype] = useState("");
    const [optional, setoptional] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
const newdata = useSelector((store) => store.AdminReducer.lecture);


    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleReset = () => {
        setSearchQuery("");
        setcategory("");
        setinstructure("");
        settype("");
        setoptional("");
        setSelectedDate("");
        setIsFilterReset(true);
    };

    // const handleCategoryChange1 = (event) => {
    //     const selectedCategory = event.target.value;
    //     setcategory(selectedCategory);
    //     setIsFilterReset(false);
    // };

    // const handleCategoryChange2 = (event) => {
    //     const selectedCategory = event.target.value;
    //     setinstructure(selectedCategory);
    //     setIsFilterReset(false);
    // };

    // const handleCategoryChange3 = (event) => {
    //     const selectedCategory = event.target.value;
    //     settype(selectedCategory);
    //     setIsFilterReset(false);
    // };

    // const handleCategoryChange4 = (event) => {
    //     const selectedCategory = event.target.value;
    //     setoptional(selectedCategory);
    //     setIsFilterReset(false);
    // };

    useEffect(() => {
dispatch(getRequestLecture());
    }, []);

    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = data

    //     .filter(
    //         (ele) =>
    //             (!category || ele.category === category) &&
    //             (!instructure || ele.instructure === instructure) &&
    //             (!type || ele.type === type) &&
    //             (!optional || ele.optional === optional) &&
    //             (!selectedDate || ele.date === selectedDate) &&
    //             ele.title.toLowerCase().includes(searchQuery.toLowerCase())
    //     )

    //     .slice(indexOfFirstItem, indexOfLastItem);

    // const paginate = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };

    return (
        <div>
            <Navbar />
            <div id={style.nav2_div}>
                <div id={style.heading_div}>
                    <h5>Lectures</h5>
                </div>
                <div id={style.btn_div}></div>
            </div>

            {/* <Filter
                searchQuery={searchQuery}
                handleSearch={handleSearch}
                handleReset={handleReset}
                selectedDate={selectedDate}
                // handleCategoryChange1={handleCategoryChange1}
                // handleCategoryChange2={handleCategoryChange2}
                // handleCategoryChange3={handleCategoryChange3}
                // handleCategoryChange4={handleCategoryChange4}
            /> */}
            <Filter />

            <div id={style.leacture_div}>
                {newdata.map((ele) => (
                    <Card key={ele.id} {...ele} />
                ))}
            </div>

            <div id={style.pagination}>
                <div id={style.totalItems}>
                    Showing {itemsPerPage} out of {data.length} results.
                </div>
                {/* <div>
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={data.length}
                        currentPage={currentPage}
                        paginate={paginate}
                    />
                </div> */}
            </div>
        </div>
    );
};

export default Lecture;
