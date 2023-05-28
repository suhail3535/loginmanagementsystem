import React from "react";
import style from "./Card.module.css";
import { Highlight} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Card = ({ title, author, attendence }) => {
    return (
        <div>
            <div id={style.main}>
                <div id={style.div_one}>
                    {title === "React-interview important questions" ||
                    title ===
                        "React - Event handling - Conditional Rendering (Class components)" ? (
                        <Link to="https://masai-course.s3.ap-south-1.amazonaws.com/lecture/1904/material/c91591a8d461c2869b9f535ded3e213e/events.mp4">
                            <h3 id={style.title}>
                                {title} <button id={style.video}>VIDEO</button>
                            </h3>
                        </Link>
                    ) : (
                        <Link to="https://zoom-lecture-recordings.s3.ap-south-1.amazonaws.com/85398677990/nxm_-_b24_1677770477000">
                            <h3 id={style.title}>
                                {title} <button id={style.live}>LIVE</button>
                            </h3>
                        </Link>
                    )}

                    <div id={style.author}>
                        <Highlight
                            query={[
                                "Rishav Mudgal",
                                "Chandra Sekhar",
                                "Pulkit Tyagi",
                                "Bicky",
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
                {attendence === "Present" ? (
                    <div id={style.div_present}>{attendence}</div>
                ) : (
                    <div id={style.div_absent}>{attendence}</div>
                )}
            </div>
        </div>
    );
};

export default Card;
