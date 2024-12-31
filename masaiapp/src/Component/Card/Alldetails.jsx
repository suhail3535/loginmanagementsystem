import React, { useEffect, useState } from "react";
import axios from "axios";
const Alldetails = () => {
    const [data, setData] = useState([]);

    const getAllDetails = () => {
        axios
            .get("https://json-server-vercel-rosy-eight.vercel.app/lecture")
            .then((res) => {
                res.json();
                console.log(res.json);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getAllDetails();
    }, []);
    return <div>



    </div>;
};

export default Alldetails;
