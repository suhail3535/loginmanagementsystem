import { useEffect } from "react";
import style from "./ManageDashbord.module.css"
import { Heading } from "@chakra-ui/react";

const ManageDashbord = () => {
    return (
        <div id={style.main_container}>
            <div>
                <Heading size="md" textAlign="center" marginBottom={10}>
                    Manage Dashbord
                </Heading>
            </div>

            <div id={style.imagediv}>
                <img
                    src="https://cdn.dribbble.com/users/134487/screenshots/5489136/irma_todribbble_.gif"
                    alt=""
                />

            </div>
        </div>
    );
};
export default ManageDashbord;
