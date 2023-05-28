import React from 'react'
import style from "./LoginTicket.module.css"
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineBrightnessMedium } from "react-icons/md";
const Navcomponent = () => {
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
              <div id={style.optional} >
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
                      <FaUserAlt
                          style={{
                              fontSize: "1.7em",

                              color: "white",
                          }}
                      />
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
}

export default Navcomponent