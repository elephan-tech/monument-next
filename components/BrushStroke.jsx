import * as React from "react";
import { getColor } from "../utils/styleUtils";

const BrushStroke = ({children}) => (
  <span style={{
      background: "url('/brush1.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: '60% 110%',
      backgroundPosition:'center',
  }}>{children}</span>
);

export default BrushStroke;
