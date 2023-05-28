import React from "react";
import style from "./Admincard.module.css";
import { Highlight } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { deletedata, getRequest } from "../../Redux/Admin/actions.js";

import { useDispatch } from "react-redux";
const AdminCard = ({ id,title, author, attendence }) => {

      const dispatch = useDispatch();
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
        dispatch(deletedata(id)).then(() => dispatch(getRequest()));

    };



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

                    <div
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
                    </div>


                </div>

                <div id={style.div_two} onClick={() => handleDelete(id)}>
                    Remove
                </div>
            </div>
        </div>
    );
};

export default AdminCard;
