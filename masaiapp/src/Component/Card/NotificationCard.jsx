import React from "react";
import style from "./NoticationCard.module.css";
import { HiCalendar } from "react-icons/hi";
const NotificationCard = ({ title, author, nature, details }) => {
    return (
        <div>
            <div id={style.main}>
                <div id={style.div_one}>
                    <h3 id={style.title}>{title}</h3>

                    <p>{author}</p>
                </div>

                <div id={style.duration_div}>
                    <div id={style.nature}> {nature}</div>

                    <div id={style.user}>
                        <span>
                            <HiCalendar
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
            </div>
        </div>
    );
};

export default NotificationCard;
