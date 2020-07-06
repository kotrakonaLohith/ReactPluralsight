import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import { getCourses } from "../api/courseApi";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
}

export default Courses;
