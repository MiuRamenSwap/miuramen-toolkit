import React from "react";
import { MiuRamenStack, MiuRamenInput, MiuRamenLabel } from "./StyledMiuRamenToggle";
import { MiuRamenToggleProps, scales } from "./types";

const MiuRamenToggle: React.FC<MiuRamenToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <MiuRamenStack scale={scale}>
    <MiuRamenInput id={props.id || "miuramen-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <MiuRamenLabel scale={scale} checked={checked} htmlFor={props.id || "miuramen-toggle"}>
      <div className="miuramens">
        <div className="miuramen" />
        <div className="miuramen" />
        <div className="miuramen" />
        <div className="butter" />
      </div>
    </MiuRamenLabel>
  </MiuRamenStack>
);

export default MiuRamenToggle;
