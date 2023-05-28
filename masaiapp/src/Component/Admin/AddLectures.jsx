import { Heading } from "@chakra-ui/react";
import style from "./AddLecture.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { lecturesData} from "../../Redux/Admin/actions.js";

const initialState = {
    title: "",
    author: "",
    attendence: "",
    category: "",
    instructure: "",
    type: "",
    optional: "",
};

const AddLecture = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const newData = useSelector((store) => {
        return {
            lecture: store.AdminReducer.lecture,
            isError: store.isError,
            isLoading: store.isLoading,
        };
    });
    const { lecture, isError, isLoading } = newData;
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(lecturesData(data));
        setData(initialState);
        alert("data submitted");
    };
    const handleCategoryChange1 = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return { ...prev, [name]: value };
        });

        console.log(data);
    };

    return (
        <div id={style.addlecture_div}>
            <Heading size="md" textAlign={"center"}>
                Add Lectures
            </Heading>

            <div id={style.allDetails_div}>
                <form>
                    <div id={style.filter_div}>
                        <div id={style.select_tag_div}>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input
                                    placeholder="Enter title.."
                                    name="title"
                                    value={data.title}
                                    onChange={(e) => handleCategoryChange1(e)}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Started By-</FormLabel>
                                <Input
                                    placeholder="Enter..."
                                    name="author"
                                    value={data.author}
                                    onChange={(e) => handleCategoryChange1(e)}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Category</FormLabel>
                                <Select
                                    placeholder="Choose"
                                    name="category"
                                    value={data.category}
                                    onChange={handleCategoryChange1}>
                                    <option value="coading">Coading</option>
                                    <option value="Dsa">Dsa</option>
                                    <option value="Csbt">Csbt</option>
                                    <option value="General">General</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Type</FormLabel>
                                <Select
                                    placeholder="Choose"
                                    name="type"
                                    value={data.type}
                                    onChange={handleCategoryChange1}>
                                    <option value="live">Live</option>
                                    <option value="video">Video</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Instructors</FormLabel>
                                <Select
                                    placeholder="Choose"
                                    name="instructure"
                                    value={data.instructure}
                                    onChange={handleCategoryChange1}>
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
                                    <option value="Harshal">Harshal</option>
                                    <option value="Divya Sheeroju">
                                        Divya Sheeroju
                                    </option>
                                    <option value="Avinash Patro">
                                        Avinash Patro
                                    </option>
                                </Select>
                            </FormControl>
                        </div>
                        <div id={style.last_div}>
                            <FormControl>
                                <FormLabel>Optional</FormLabel>
                                <Select
                                    placeholder="Choose"
                                    name="optional"
                                    value={data.optional}
                                    onChange={handleCategoryChange1}>
                                    <option value="no">No</option>
                                    <option value="yes">YES</option>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div id={style.submitbttn}>

                        <Button onClick={handleSubmit} id={style.reset_filter}>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddLecture;
