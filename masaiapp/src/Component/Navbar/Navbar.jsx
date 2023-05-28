import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/react";

import UserDropdown from "./Dropdown";
import MobileNav from "./Dropdown";

let userData = JSON.parse(localStorage.getItem("userData")) || [];
console.log(userData.email, "from login");
function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div id="nav-menu" className="navbar">
            <div className="wrapper">
                <div className="wrapperLeft">
                    <Link to="/home" smooth={true} offset={-100} duration={500}>
                        <img
                            id="logo"
                            src="https://mma.prnewswire.com/media/1631809/Masai_Logo.jpg?p=facebook"
                            alt="icon"
                        />
                    </Link>
                </div>
                <div className="wrapperRight">
                    <div>
                        <Link
                            to="/lectures"
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="nav-link home">
                            Lectures
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/assignment"
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="nav-link about">
                            Assignments
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/quiz"
                            smooth={true}
                            offset={-79}
                            duration={500}
                            className="nav-link skills">
                            Quizzes
                        </Link>
                    </div>
                    <div>
                        <Link
                            to=""
                            smooth={true}
                            offset={-79}
                            duration={500}
                            className="nav-link projects">
                            Discussions
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/notication"
                            smooth={true}
                            offset={-79}
                            duration={500}
                            className="nav-link contact">
                            Notifications
                        </Link>
                    </div>
                    <div>
                        <Link
                            to=""
                            smooth={true}
                            offset={-79}
                            duration={500}
                            className="nav-link contact">
                            Messages
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/elective"
                            smooth={true}
                            offset={-79}
                            duration={500}
                            className="nav-link contact">
                            Electives
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/course"
                            smooth={true}
                            offset={-79}
                            duration={500}
                            className="nav-link contact">
                            Courses
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/ticketpannel"
                            smooth={true}
                            offset={-79}
                            duration={500}
                            className="nav-link contact">
                            Tickets
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/announcement"
                            smooth={true}
                            offset={-79}
                            duration={500}
                            className="nav-link contact">
                            Announcements
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/bounty"
                            smooth={true}
                            offset={-79}
                            duration={500}
                            className="nav-link contact">
                            Bounty Program
                        </Link>
                    </div>
                </div>

                <div className="responce">
                    <MenuRoundedIcon onClick={onOpen} />
                    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent marginTop={"100px"}>
                            <DrawerCloseButton />
                            <DrawerBody marginTop={"30px"}>
                                <div className="drawerbody">
                                    <div>
                                        <Link
                                            to="/lectures"
                                            smooth={true}
                                            offset={-100}
                                            duration={500}
                                            onClick={onClose}>
                                            Lectures
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/assignment"
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            onClick={onClose}>
                                            Assignments
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/quiz"
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            onClick={onClose}>
                                            Quizzes
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to=""
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            onClick={onClose}>
                                            Discussions
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/notication"
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            onClick={onClose}>
                                            Notifications
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to=""
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            onClick={onClose}>
                                            Messages
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/elective"
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            onClick={onClose}>
                                            Electives
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/course"
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            onClick={onClose}>
                                            Course
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/ticketpannel"
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            onClick={onClose}>
                                            Tickets
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="announcement"
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            onClick={onClose}>
                                            Announcements
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/bounty"
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            onClick={onClose}>
                                            Bounty Program
                                        </Link>
                                    </div>
                                </div>
                            </DrawerBody>
                            {/* <UserDropdown /> */}
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
            <div className="dropdown_div">
                <MobileNav />
            </div>
        </div>
    );
}

export default Navbar;
