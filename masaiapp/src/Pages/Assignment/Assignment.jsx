import React, { useEffect, useState } from "react";

import Navbar from "../../Component/Navbar/Navbar";


import style from "./Assignment.module.css";
import Card2 from "../../Component/Card/Card2";
import Filter2 from "../../Component/Filter/Filter2";
import { useDispatch, useSelector } from "react-redux";
import { getRequestAssisgnment } from "../../Redux/Admin/actions";
import Pagination from "../../Component/Pagination";
import Skeletonbar from "../../Component/Skeleton";

const Assignment = () => {
        const [data, setData] = useState([]);
        const [isFilterReset, setIsFilterReset] = useState(true);
        const [searchQuery, setSearchQuery] = useState("");
        const [category, setcategory] = useState("");
        const [instructure, setinstructure] = useState("");
        const [type, settype] = useState("");
        const [optional, setoptional] = useState("");
        const [status, setStatus] = useState("");
        const [selectedDate, setSelectedDate] = useState("");
        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage] = useState(8);
    const dispatch = useDispatch();
    const arr=[1,2,3]
    const { isLoading,lecture } = useSelector((store) => store.AdminReducer);

    useEffect(() => {
        dispatch(getRequestAssisgnment());
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

            setStatus("");
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
                    (!status || ele.status === status) &&
                    ele.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .slice(indexOfFirstItem, indexOfLastItem);

        const paginate = (pageNumber) => {
            setCurrentPage(pageNumber);
        };

        const handleStatusChange = (event) => {
            const selectedStatus = event.target.value;
            setStatus(selectedStatus);
            setIsFilterReset(false);
        };
    return (
        <div>
            <Navbar />
            <div id={style.nav2_div}>
                <div id={style.heading_div}>
                    <h5>Assignments</h5>
                </div>
                <div id={style.btn_div}></div>
            </div>
            <Filter2
                searchQuery={searchQuery}
                handleSearch={handleSearch}
                handleReset={handleReset}
                selectedDate={selectedDate}
                handleCategoryChange1={handleCategoryChange1}
                handleCategoryChange2={handleCategoryChange2}
                handleCategoryChange3={handleCategoryChange3}
                handleCategoryChange4={handleCategoryChange4}
                handleStatusChange={handleStatusChange}
            />
            <div>
                {isLoading ? arr.map((ele) => {
                        return <Skeletonbar key={ele.id} />
                    })
                    : currentItems.map((ele) => (
                          <Card2 key={ele.id} {...ele} />
                      ))}
            </div>

            <div id={style.pagination}>
                <div id={style.totalItems}>
                    Showing {itemsPerPage} out of {lecture.length} results.
                </div>
                <div>
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={lecture.length}
                        currentPage={currentPage}
                        paginate={paginate}
                    />
                </div>
            </div>
        </div>
    );
};

export default Assignment;
