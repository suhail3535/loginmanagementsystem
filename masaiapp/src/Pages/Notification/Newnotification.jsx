import React, { useEffect, useState } from "react";

import style from "./Notification.module.css";


import axios from "axios";
import NotificationCard from "../../Component/Card/NotificationCard";

const Newnotication = () => {
    const [data, setData] = useState([]);
    const getAllDetails = () => {
        axios
            .get("https://shy-puce-lemming-tux.cyclic.app/notification")
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
            {data.map((ele) => (
                <NotificationCard key={ele.id} {...ele} />
            ))}
        </div>
    );
};

export default Newnotication;
