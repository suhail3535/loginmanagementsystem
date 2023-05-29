import React, { useEffect, useState } from "react";

import style from "./AllLecture.module.css";
import Filter from "../Filter/Filter";
import AdminCard from "../Card/AdminCard";
import { getRequest } from "../../Redux/Admin/actions.js";
import { useDispatch, useSelector } from "react-redux";

const AllLecture = () => {
    const dispatch = useDispatch();
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

    const newData = useSelector((store) => {
        console.log(store)
        return {
            lecture: store.AdminReducer.lecture,
            isLoading: store.isLoading,
            isError: store.isError,
        };
    });
    const { lecture} = newData;


useEffect(() => {


    dispatch(getRequest());
}, []);



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

    const handleCategoryChange1 = (event) => {
        const selectedCategory = event.target.value;
        setcategory(selectedCategory);
        setIsFilterReset(false);
    };

    const handleCategoryChange2 = (event) => {
        const selectedCategory = event.target.value;
        setinstructure(selectedCategory);
        setIsFilterReset(false);
    };

    const handleCategoryChange3 = (event) => {
        const selectedCategory = event.target.value;
        settype(selectedCategory);
        setIsFilterReset(false);
    };

    const handleCategoryChange4 = (event) => {
        const selectedCategory = event.target.value;
        setoptional(selectedCategory);
        setIsFilterReset(false);
    };


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = lecture
        .filter(
            (ele) =>
                (!category || ele.category === category) &&
                (!instructure || ele.instructure === instructure) &&
                (!type || ele.type === type) &&
                (!optional || ele.optional === optional) &&
                (!selectedDate || ele.date === selectedDate) &&
                ele.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(indexOfFirstItem, indexOfLastItem);



    return (
        <div id={style.maincont}>
            <div style={{ marginLeft: "60px" }}>
                <Filter
                    searchQuery={searchQuery}
                    handleSearch={handleSearch}
                    handleReset={handleReset}
                    selectedDate={selectedDate}
                    handleCategoryChange1={handleCategoryChange1}
                    handleCategoryChange2={handleCategoryChange2}
                    handleCategoryChange3={handleCategoryChange3}
                    handleCategoryChange4={handleCategoryChange4}
                />
            </div>

            <div id={style.schdle}>
                {currentItems.length > 0 ? (
                    currentItems.map((ele) => (
                        <AdminCard key={ele.id} {...ele} />
                    ))
                ) : (
                    <h1 style={{ textAlign: "center" }}>
                        Today's no Schedule..
                    </h1>
                )}
            </div>

    
        </div>
    );
};

export default AllLecture;
