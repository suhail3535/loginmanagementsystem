import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login.jsx";
// import Dashbord from "../Pages/Dashbord";
import Lecture from "../Pages/Lecture/Lecture";
// import Filter from "../Component/Filter/Filter";
import Assignment from "../Pages/Assignment/Assignment";
import Quiz from "../Pages/Quiz/Quiz";
import Course from "../Pages/Courses/Course";
import Elective from "../Pages/Elective/Elective";
import Bounty from "../Pages/BountyProgram/Bounty";
// import Announcement from "../Pages/Announcement/Announcement";
import Notifivation from "../Pages/Notification/Notifivation";
import LoginTicket from "../Component/TicketSystem/LoginPannel/LoginTicket";
import Createtickets from "../Component/TicketSystem/CreateTickets.jsx/Createtickets";
// import { Admin } from "../Pages/Admin";

// import Modelcom from "../Component/Admin/Tickets/Modal";
// import Discussion from "../Pages/Discussion";
// import Messagess from "../Pages/Messagess";

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/assignment" element={<Assignment />} />
                <Route path="/lectures" element={<Lecture />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/notication" element={<Notifivation />} />
                <Route path="/elective" element={<Elective />} />
                <Route path="/course" element={<Course />} />
                <Route path="/ticketpannel" element={<LoginTicket />} />
                <Route path="/createticket" element={<Createtickets />} />
                <Route path="/bounty" element={<Bounty />} />
                {/* <Route path="/dashbord" element={<Dashbord />} /> */}
                {/* <Route path="/filter" element={<Filter />} />



                <Route path="/announcement" element={<Announcement />} />

            */}
                {/* <Route path="/admin" element={<Admin />} /> */}
                {/* <Route path="/modal" element={<Modelcom />} /> */}
                {/* <Route path="/diss" element={<Discussion />} /> */}
                {/* <Route path="/messages" element={<Messagess />} /> */}
            </Routes>
        </div>
    );
};

export default Allroutes;
