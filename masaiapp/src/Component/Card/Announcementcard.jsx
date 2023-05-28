import React from "react";
import style from "./Announcementcard.module.css";
import { FaUsers } from "react-icons/fa";
const Announcementcard = ({ title, author, details, status, duration }) => {
    return (
        <div>
            <div id={style.main}>
                <div id={style.bluediv}></div>
                <div id={style.div_one}>
                    <div id={style.logo1}>
                        <p>S</p>
                    </div>
                    <div>
                        <h3 id={style.title}>{title}</h3>
                        <p id={style.author}>{author}</p>
                    </div>
                </div>

                <div id={style.duration_div}>
                    <div id={style.duration}> {duration}</div>
                    <div id={style.user}>
                        <span>
                            <FaUsers
                                style={{
                                    fontSize: "2em",
                                    marginRight: 5,
                                    color: "gray",
                                }}
                            />
                        </span>

                        <span>{details} </span>
                    </div>
                </div>

                <div id={style.spandiv}>
                    <span>&#62;</span>
                </div>
            </div>
        </div>
    );
};

export default Announcementcard ;
