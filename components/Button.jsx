import { Button as DopeButton } from "dope-components";
import { getColor } from "../utils/styleUtils";

const Button = (props) => {
  const { color, children, ...buttonProps } = props;
  const clr = getColor(color);
  return (
    <DopeButton color={clr} {...buttonProps}>
      {children}
    </DopeButton>
  );
};

export default Button;
