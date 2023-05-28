import React from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import style from "./Course.module.css"
import CourseCard from './CourseCard';
const Course = () => {
  return (
      <div>
          <Navbar />
          <div id={style.nav2_div}>
              <div id={style.heading_div}>
                  <h5>Courses</h5>
              </div>
              <div id={style.btn_div}>
                  <button>PAST COURSES</button>
              </div>
          </div>
          <div id={style.card_container}>
              <CourseCard/>
          </div>


      </div>
  );
}

export default Course