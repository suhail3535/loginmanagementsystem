import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import style from "./Announcement.module.css";

import Announcementcard from "../../Component/Card/Announcementcard";
import axios from "axios";

const Announcement = () => {
    const [data, setData] = useState([]);
    const getAllDetails = () => {
        axios
            .get("https://shy-puce-lemming-tux.cyclic.app/announcement")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getAllDetails();
    }, []);

    return (
        <div id={style.main_container}>
            <Navbar />
            <div id={style.Announcement}>
                <h5 id={style.heading}>Announcements</h5>
                <div id={style.emp}></div>
            </div>

            {data.map((ele) => (
                <Announcementcard key={ele.id} {...ele} />
            ))}
        </div>
    );
};

export default Announcement;
