import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

const PlayPage = () => {
  return (
    <div>
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "30px",
          alignItems: "center",
        }}
      >
        Page Under Construction :) <br />
        Due to Certain Time Constraints, Not Done Yet !
      </h1>
    </div>
  );
};

export default DefaultLayoutHoc(PlayPage);
