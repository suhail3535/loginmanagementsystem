import React from "react";
import style from "./Admincard.module.css";
import { Highlight } from "@chakra-ui/react";
const StudentCard = ({ id, title, author, attendence }) => {
    return (
        <div>
            <div id={style.main}>
                <div id={style.div_one}>
                    {title === "React-interview important questions" ||
                    title ===
                        "React - Event handling - Conditional Rendering (Class components)" ? (
                        <h3 id={style.title}>
                            {title}
                            <button id={style.live}>VIDEO</button>
                        </h3>
                    ) : (
                        <h3 id={style.title}>
                            {title} <button id={style.live2}>LIVE</button>
                        </h3>
                    )}

                    <Highlight
                        id={style.author}
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
        </div>
    );
};

export default StudentCard;
