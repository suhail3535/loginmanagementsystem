import React, { useState } from "react";

import style from "./Createticket.module.css";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";

import Navcom2 from "../LoginPannel/Navcom2";

const Createtickets = () => {
    const toast=useToast()
    const [category, setcategory] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSelectChange = (e) => {
        setcategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            category: category,
            title: title,
            description: description,
        };

        axios
            .post("https://shy-puce-lemming-tux.cyclic.app/tickets", data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        setcategory("");
        setTitle("");
        setDescription("");
        toast({
            title: "Ticket Created Successful",
            description: "",
            status: "success",
            position: "top",
            duration: 2500,
            isClosable: true,
        });
    };

    return (
        <div>
            <Navcom2 />
            <div id={style.nav2_div}>
                <div id={style.heading_div}>
                    <h5>Create Ticket</h5>
                </div>
                <div id={style.btn_div}></div>

            </div>
            <div id={style.step}></div>
            <div id={style.ticketbox}>
                <div id={style.category_div}>
                    <FormControl>
                        <FormLabel>Category</FormLabel>
                        <Select
                            placeholder="Choose"
                            value={category}
                            onChange={handleSelectChange}>
                            <option value="Attendence">Attendence</option>
                            <option value="Leave">Leave</option>
                            <option value="Evalution">Evalution</option>
                            <option value="Mac">Mac</option>
                            <option value="Revision">Revision</option>
                        </Select>
                    </FormControl>
                </div>
                <div id={style.title_div}>
                    <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input
                            placeholder="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FormControl>
                </div>
                <div id={style.deccription_div}>
                    <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                            placeholder="please write here.........."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormControl>
                </div>
                <div id={style.bttn_div}>
                    <Button onClick={handleSubmit} id={style.bttn}>
                        CREATE
                    </Button>{" "}
                </div>
            </div>
        </div>
    );
};

export default Createtickets;
