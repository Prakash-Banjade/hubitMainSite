import React from "react";
import InstructorCard from "./InstructorCard";

function CourseInstructor({ instructors }) {
  console.log(instructors)
  if (instructors?.length) {
    return (
      <div>
        <div className=" px-14 py-16 rounded-sm border">
          {instructors?.map((instructor, i) => {
            return (
              <div key={i}>
                <InstructorCard instructor={instructor} />
              </div>
            );
          })}
        </div>
      </div>
    )
  }
  else {
    return <>No teacher found</>
  }
}

export default CourseInstructor;
