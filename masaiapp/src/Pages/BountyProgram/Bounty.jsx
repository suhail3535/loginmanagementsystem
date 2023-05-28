import React from "react";
import Navbar from "../../Component/Navbar/Navbar";

import style from "./Bounty.module.css";
import BountyNav from "../../Component/Navbar/BountyNav";
const Bounty = () => {
    return (
        <div>
            <Navbar />
            <BountyNav />
            <div id={style.empty}>
                <div>Position</div>
                <div>Name of student</div>
                <div>Student Code</div>
                <div> Coins achieved </div>
                <div> Bounties won</div>
                <div></div>
            </div>
        </div>
    );
};

export default Bounty;
