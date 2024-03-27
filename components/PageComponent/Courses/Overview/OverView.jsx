import React from "react";
import Leftbanner from "../../../PageComponent/Courses/CourseSection/LeftBanner";

function OverView({ data }) {
  console.log(data)
  return (
    <div>
      <div>
        <Leftbanner data={data} />
      </div>
    </div>
  );
}

export default OverView;
