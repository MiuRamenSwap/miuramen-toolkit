import React, { useState } from "react";
import MiuRamenToggle from "./MiuRamenToggle";

export default {
  title: "Components/MiuRamenToggle",
  component: MiuRamenToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <MiuRamenToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <MiuRamenToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <MiuRamenToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
