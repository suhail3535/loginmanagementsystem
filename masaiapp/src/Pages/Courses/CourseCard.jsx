import React from "react";
import style from "./Course.module.css";
const CourseCard = () => {
    return (
        <div id={style.main_div}>
            <div id={style.complete_card}>
                <div id={style.title_div}>
                    <h4 id={style.title}>Course</h4>
                </div>
                <div className={style.detail1_div}>
                    <p>Section Name</p>
                    <p>RM-101-B25</p>
                </div>
                <div className={style.detail1_div}>
                    <p>Instructional Associate</p>
                    <p>mahesh wankhade - IA</p>
                </div>
                <div className={style.detail1_div}>
                    <p>
                        Pair Programming
                        <span id={style.spantag}> Available</span>
                    </p>
                    <p className={style.p}>
                        <a id={style.atag} href="/#">
                            Schedule Event <span>&#8594;</span>
                        </a>
                    </p>
                </div>
                <div className={style.detail1_div}>
                    <p>Experience Champion</p>
                    <p>Sibin O</p>
                </div>
            </div>

            <div id={style.complete_card}>
                <div id={style.title_div}>
                    <h4 id={style.title}>Course</h4>
                </div>
                <div className={style.detail1_div}>
                    <p>Section Name</p>
                    <p>RM-101-B25</p>
                </div>
                <div className={style.detail1_div}>
                    <p>Instructional Associate</p>
                    <p>Chetan Pant</p>
                </div>
                <div className={style.detail1_div}>
                    <p>Experience Champion</p>
                    <p>Sibin O</p>
                </div>
                <div id={style.detail1_div2}>
                    <p></p>
                    <p></p>
                </div>
            </div>

            <div id={style.complete_card}>
                <div id={style.title_div}>
                    <h4 id={style.title}>Course</h4>
                </div>
                <div className={style.detail1_div}>
                    <p>Section Name</p>
                    <p>CSBTCOMPLETED-B26</p>
                </div>
                <div className={style.detail1_div}>
                    <p>Instructional Associate</p>
                    <p>Chetan Pant</p>
                </div>
                <div className={style.detail1_div}>
                    <p>
                        Pair Programming{" "}
                        <span id={style.spantag}> Available</span>
                    </p>
                    <p className={style.p}>
                        <a href="/#">
                            Schedule Event <span>&#8594;</span>
                        </a>
                    </p>
                </div>
                <div className={style.detail1_div}>
                    <p>Experience Champion</p>
                    <p>Sibin O</p>
                </div>
            </div>

            <div id={style.complete_card}>
                <div id={style.title_div}>
                    <h4 id={style.title}>Course</h4>
                </div>
                <div className={style.detail1_div}>
                    <p>Section Name</p>
                    <p>RM B25-Channel-2</p>
                </div>
                <div className={style.detail1_div}>
                    <p>Instructional Associate</p>
                    <p>Chetan Pant</p>
                </div>

                <div className={style.detail1_div}>
                    <p>Experience Champion</p>
                    <p>Sibin O</p>
                </div>
            </div>
            <div id={style.complete_card}>
                <div id={style.title_div}>
                    <h4 id={style.title}>Course</h4>
                </div>
                <div className={style.detail1_div}>
                    <p>Section Name</p>
                    <p>Pre-Placements FT-WEB-22 MERN</p>
                </div>
                <div className={style.detail1_div}>
                    <p>Instructional Associate</p>
                    <p>Chetan Pant</p>
                </div>

                <div className={style.detail1_div}>
                    <p>Experience Champion</p>
                    <p>Sibin O</p>
                </div>
            </div>
            <div id={style.complete_card}>
                <div id={style.title_div}>
                    <h4 id={style.title}>Course</h4>
                </div>
                <div className={style.detail1_div}>
                    <p>Section Name</p>
                    <p>Active Placements FT-WEB-22 MERN</p>
                </div>
                <div className={style.detail1_div}>
                    <p>Instructional Associate</p>
                    <p>mahesh wankhade - IA</p>
                </div>

                <div className={style.detail1_div}>
                    <p>Experience Champion</p>
                    <p>Sibin O</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
