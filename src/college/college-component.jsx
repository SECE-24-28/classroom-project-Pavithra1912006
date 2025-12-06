import React from "react";
import { CollegeStyle } from "./college-style";

const College = () => {
  return (
    <CollegeStyle>
    <div className="parent">
        <div className="heading">Trusted By</div>
        <div className="parent1">
      <div className="box1">
        <p>
          100+ <br /> Colleges
        </p>
      </div>
       <div className="box2">
        <p>
          150 <br />Professional Trainers
        </p>
      </div>
       <div className="box3">
        <p>
          1000+ <br />Study Materials<br/>
AGH LMS
        </p>
      </div>
      <div className="box4">
        <p>
          100000 <br />Students
<br/>
B2B:Placement Training
        </p>
      </div>
      </div>
      </div>

    </CollegeStyle>
  );
};

export default College;
