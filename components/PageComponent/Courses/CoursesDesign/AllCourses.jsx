import React from 'react'
import PopularCourses from '../../HomePage/PopularCourses/PopularCourses';

function AllCourses({ courses }) {
  console.log(courses, 'from all course');
  return (
    <div>
      <div className=''>
        <PopularCourses card={courses} value="courses" />
      </div>
    </div>
  )
}

export default AllCourses
