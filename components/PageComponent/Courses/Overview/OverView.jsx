import React from "react";
import Leftbanner from "../../../PageComponent/Courses/CourseSection/LeftBanner";

function OverView({ detail, coursetitle, description, id }) {
  return (
    <div>
      <div>
        {detail !== null && (
          <Leftbanner
            image={detail?.image}
            coursetitle={coursetitle}
            description={description}
            id={id}
          />
        )}
      </div>
    </div>
  );
}

export default OverView;
