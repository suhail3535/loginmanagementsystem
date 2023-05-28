import React from "react";
import style from "./Elective.module.css";
import Navbar from "../../Component/Navbar/Navbar";
const Elective = () => {
    return (
        <div>
            <Navbar />
            <div id={style.nav2_div}>
                <div id={style.heading_div}>
                    <h5>Electives</h5>
                </div>
                <div id={style.btn_div}>
                    <button>FAQ</button>
                </div>
            </div>

            <div id={style.elective_msg_div}>
                <h1>There's nothing here, yet...</h1>
                <p id={style.info}>
                    Looks like you do not have any electives assigned to you at
                    the moment.
                </p>
            </div>
        </div>
    );
};

export default Elective;
