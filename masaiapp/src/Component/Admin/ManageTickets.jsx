import { useEffect, useState } from "react";
import TicketCard from "./Tickets/TicketCard";

import style from "./Tickets/Ticket.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getRequestTickets } from "../../Redux/Admin/actions";
const ManageProducts = () => {
    const [data, setData] = useState([]);
const dispatch = useDispatch();
        const ticketData = useSelector((store) => {
            console.log(store);
            return {
                lecture: store.AdminReducer.lecture,
                isLoading: store.isLoading,
                isError: store.isError,
            };
        });
        const { lecture } = ticketData;

        useEffect(() => {
            dispatch(getRequestTickets());
        }, []);


    console.log(lecture);
    return (
        <div id={style.main_div}>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {lecture.map((item, index) => {
                        return (
                            <TicketCard
                                key={item.id}
                                {...item}
                                index={index + 1}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;
