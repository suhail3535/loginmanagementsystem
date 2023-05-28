import React from "react";
import style from "./LoginTicket.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineBrightnessMedium } from "react-icons/md";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,

    PopoverArrow,
    PopoverCloseButton,

    Button,
    Portal,
} from "@chakra-ui/react";


const userData = JSON.parse(localStorage.getItem("userData")) || [];

let x = userData.email[0].toUpperCase()
const Navcom2 = () => {
    const navigate=useNavigate()
    const handleSubmit = () => {
navigate("/ticketpannel");
}
    return (
        <div>
            <div id={style.navbar}>
                <div id={style.first_div}>
                    <div style={{ width: "30%" }}>
                        <Link
                            to="/home"
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            <img
                                id="logo"
                                src="https://mma.prnewswire.com/media/1631809/Masai_Logo.jpg?p=facebook"
                                alt="icon"
                            />
                        </Link>
                    </div>
                    <div>PORTFOLIO</div>
                    <div>TICKETS</div>
                    <div>DISCUSSIONS</div>
                </div>
                <div id={style.optional}>
                    <Link to="/home" smooth={true} offset={-100} duration={500}>
                        <img
                            id="logo"
                            src="https://mma.prnewswire.com/media/1631809/Masai_Logo.jpg?p=facebook"
                            alt="icon"
                        />
                    </Link>
                </div>
                <div></div>
                <div></div>

                <div id={style.second_div}>
                    <div id={style.icon}>
                        <div>
                            <Popover>
                                <PopoverTrigger>
                                    <p>{x}</p>
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverHeader></PopoverHeader>
                                        <PopoverCloseButton />
                                        <PopoverBody>
                                            <p id={style.model}>{x}</p>
                                            <span>{userData.email}</span>
                                        </PopoverBody>

                                        <Button
                                            id={style.logout}
                                            onClick={handleSubmit}>
                                            LOGOUT
                                        </Button>
                                    </PopoverContent>
                                </Portal>
                            </Popover>
                        </div>
                    </div>
                    <div>
                        <MdOutlineBrightnessMedium
                            style={{
                                fontSize: "2em",
                                marginRight: 5,
                                color: "gray",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navcom2;
