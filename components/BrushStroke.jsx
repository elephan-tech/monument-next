import * as React from "react";

const BrushStroke = ({ children }) => (
  <span
    style={{
      backgroundImage: "url('images/brush1.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "60% 110%",
      backgroundPosition: "center",
    }}
  >
    {children}
  </span>
);

export default BrushStroke;
