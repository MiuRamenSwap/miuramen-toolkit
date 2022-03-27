import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 302 302" {...props}>
      
<image href="data:image/png;base64,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"
width="302">
</image>
    </Svg>
  );
};

export default Icon;