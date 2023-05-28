import React from "react";
import style from "./Card2.module.css";
import { Highlight} from "@chakra-ui/react";
import { getStyleValue } from "@mui/system";
import { Link } from "react-router-dom";
const Card2 = ({ title, author, attendence,status }) => {
    return (
        <div>
            <div id={style.main}>
                <div id={style.div_one}>
                    {title === "Swagger API Documentation CODING" ||
                    title === "Fullstack CRUD - I" ||
                    title === "Fullstack CRUD - II" ||
                    title === "Mongoose - I" ||
                    title === "Express-I" ||
                    title === "Middlewere and Authentication" ? (
                        <Link to="https://course.masaischool.com/assignments/27496/problem/27988">
                            <h3 id={style.title}>
                                {title}
                                <button id={style.live}>CODING</button>
                            </h3>{" "}
                        </Link>
                    ) : title === "DSA421_B24 CONTEST - 1 DSA" ||
                      title === "DSA421_B24 CONTEST - 2 DSA" ||
                      title === "DSA421_B24 CONTEST - 3 DSA" ||
                      title === "DSA421_B24 CONTEST - 4 DSA" ||
                      title === "DSA421_B24 CONTEST - 5 DSA" ||
                      title === "DSA421_B24 CONTEST - 6 DSA" ? (
                        <Link to="https://oj.masaischool.com/contest/8170?password=contest%406">
                            {" "}
                            <h3 id={style.title}>
                                {title}
                                <button id={style.live}>DSA</button>
                            </h3>
                        </Link>
                    ) : (
                        <Link to="https://course.masaischool.com/assignments/26637">
                            <h3 id={style.title}>
                                {title}{" "}
                                <button id={style.general}>GENERAL</button>
                            </h3>
                        </Link>
                    )}

                    <div id={style.author}>
                        <Highlight
                            id={style.author}
                            query={[
                                "Rishav Mudgal",
                                "Chandra Sekhar",
                                "Pulkit Tyagi",
                                "Bicky",
                                "Omkar Tripathi",
                            ]}
                            styles={{
                                fontWeight: "bold",
                                fontSize: "14",
                                color: "black",
                            }}>
                            {author}
                        </Highlight>
                    </div>
                </div>

                {status === "Progress" ? (
                    <div id={style.progress_div}>
                        {status === "Progress" ? (
                            <div id={style.div_progress}>{status}</div>
                        ) : (
                            <div id={style.div_completed}>{status}</div>
                        )}
                        <div id={style.icon_manage_div}>
                            <div id={style.icon_div}>
                                <img src="./a.jpg" alt="icon" />
                                <p id={style.ptag}>1/3</p>
                            </div>
                        </div>
                    </div>
                ) : status === "New" ? (
                    <div id={style.progress_div3}>
                        {status === "New" ? (
                            <div id={style.div_new}>{status}</div>
                        ) : (
                            <div id={style.div_completed}>{status}</div>
                        )}
                        <div id={style.icon_manage_div}>
                            <div id={style.icon_div}>
                                <img src="./a.jpg" alt="icon" />
                                <p id={style.ptag}>0/3</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div id={style.progress_div2}>
                        {status === "Progress" ? (
                            <div id={style.div_progress}>{status}</div>
                        ) : (
                            <div id={style.div_completed}>{status}</div>
                        )}
                        <div id={style.icon_manage_div}>
                            <div id={style.icon_div}>
                                <img src="./a.jpg" alt="icon" />
                                <p id={style.ptag}>3/3</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card2;
