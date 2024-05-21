import React from "react";
import Intropage from "./Intropage";
import Skills from "./Skills";
import Aboutus from "../about/Aboutus";

const index = () => {
  return (
    <div>
      <Intropage />
      <Skills />
      <Aboutus />
    </div>
  );
};

export default index;
