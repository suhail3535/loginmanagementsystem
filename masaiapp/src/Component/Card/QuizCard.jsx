import React from "react";
import style from "./QuizCard.module.css";
import { Highlight, background } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const QuizCard = ({ title, author, details, status,duration }) => {
    return (
        <div>
            <div id={style.main}>
                <div id={style.div_one}>
                    <Link to="https://course.masaischool.com/quizzes/724">
                        <h3 id={style.title}>
                            {title}
                            <button id={style.live}>EVALUTION</button>
                        </h3>{" "}
                    </Link>

                    <div id={style.author}>
                        <Highlight
                            id={style.author}
                            query={[
                                "Rishav Mudgal",
                                "Chandra Sekhar",
                                "Pulkit Tyagi",
                                "Bicky",
                                "Omkar Tripathi",
                                "Harshal Sawant",
                                "Divya Sheeroju",
                                "Avinash Patro",
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

                <div id={style.div_progress}>
                    {status === "Progress" ? (
                        <div id={style.div_two}>
                            {status} <p> Score 8/10</p>
                        </div>
                    ) : (
                        <div id={style.div_twoo}>
                            {status} <p> Score 7/10</p>
                        </div>
                    )}
                </div>
                <div id={style.second_div}>
                    <div id={style.details_div}>{details}</div>
                    <div id={style.duration_div}>{duration}</div>
                    <div id={style.schedule_div}>
                        <span>Schedule_at : 16 Jan, 23 - 6:00 pm</span>
                        <br />
                        <span>Conclude_at : 16 Jan, 23 - 6:45 pm</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default QuizCard;
