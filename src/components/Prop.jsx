import React from "react";

const Prop = ({ count }) => {
  
  return (
    <div>
      <h1>count number : {count ? "true" : "false"}</h1>
    </div>
  );
};

export default Prop;
