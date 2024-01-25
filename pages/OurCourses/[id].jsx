import React from "react";
import CourseDetails from "../../components/PageComponent/Courses/CourseDetails/CourseDetails";

// export async function getServerSideProps(context) {
//   const { id } = context.query;

//   let res = await fetch(`https://hubmainback.hubit.com.np/course/${id}`);
//   let data = await res.json();
//   return {
//     props: {
//       id: context.query,
//       data: data.data,
//     }, // will be passed to the page component as props
//   };
// }

function OurCourses({ id, data }) {
  console.log(id, data, "jghgf");
  return (
    <div>
      <CourseDetails detail={data} id={id} />
    </div>
  );
}

export default OurCourses;
