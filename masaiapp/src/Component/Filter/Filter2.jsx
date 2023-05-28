import React, { useState } from "react";
import style from "./filter2.module.css"
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
} from "@chakra-ui/react";

const Filter2 = (props) => {
    const {

        handleReset,
        category,
        instructure,
        type,
        optional,
        status,
        selectedDate,
        handleCategoryChange1,
        handleCategoryChange2,
        handleCategoryChange3,
        handleCategoryChange4,
        handleStatusChange,
    } = props;

    return (
        <div>
            <form>
                <div id={style.filter_div}>
                    <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input
                            placeholder="Search..."
                            value={props.searchQuery}
                            onChange={props.handleSearch}
                        />
                    </FormControl>
                    <div id={style.select_tag_div}>
                        <FormControl>
                            <FormLabel>Category</FormLabel>
                            <Select
                                placeholder="Choose"
                                value={category}
                                onChange={handleCategoryChange1}>
                                <option value="coading">Coading</option>
                                <option value="Dsa">Dsa</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Type</FormLabel>
                            <Select
                                placeholder="Choose"
                                value={type}
                                onChange={handleCategoryChange3}>
                                <option value="live">Live</option>
                                <option value="video">Video</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Instructors</FormLabel>
                            <Select
                                placeholder="Choose"
                                value={instructure}
                                onChange={handleCategoryChange2}>
                                <option value="Yogesh Bhat">
                                    Rishav Mudgal
                                </option>
                                <option value="Chandra Sekhar">
                                    Chandra Sekhar
                                </option>
                                <option value="Pulkit">Pulkit</option>
                                <option value="Bicky">Bicky</option>
                                <option value="Omkar Tripathi">
                                    Omkar Tripathi
                                </option>
                            </Select>
                        </FormControl>
                    </div>
                    <div id={style.last_div}>
                        <FormControl>
                            <FormLabel>Scheduled</FormLabel>
                            <Input type="date" value={selectedDate} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Optional</FormLabel>
                            <Select
                                placeholder="Choose"
                                value={optional}
                                onChange={handleCategoryChange4}>
                                <option value="no">No</option>
                                <option value="yes">YES</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Status</FormLabel>
                            <Select
                                placeholder="Choose"
                                value={status}
                                onChange={handleStatusChange}>
                                <option value="Progress">Pending</option>
                                <option value="Completed">Completed</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div id={style.button_div}>
                        {" "}
                        <Button
                            onClick={handleReset}
                            id={style.reset_filter_btn}>
                            Reset Filters
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Filter2;
