import React from "react";
import style from "./Notification.module.css";
import Navbar from "../../Component/Navbar/Navbar";
import TabValue from "./Tab";

const Notifivation = () => {
    return (
        <div>
            <Navbar />
            <div id={style.nav2_div}>
                <div id={style.heading_div}>
                    <h5>Notifications</h5>

                </div>
                
                <div id={style.btn_div}></div>
            </div>

            <div id={style.tab_div}>
                <TabValue />
            </div>
        </div>
    );
};

export default Notifivation;
