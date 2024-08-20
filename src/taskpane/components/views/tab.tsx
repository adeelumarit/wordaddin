import * as React from "react";
import Start from "./Start";
import PitchMark from "./PitchMark";
import Variable from "./Variable";

import { Button, Divider } from "@fluentui/react-components";

export const Tabs = () => {
  const [selectedValue, setSelectedValue] = React.useState("start");

  const handleButtonClick = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="tabs-root">
      <div className="button-container">
        <Button
          size="medium"
          className={`tabbutton ${selectedValue === "start" ? "active" : ""}`}
          onClick={() => handleButtonClick("start")}
        >
          Start
        </Button>
        <Button
          size="medium"
          className={`tabbutton ${selectedValue === "pitchMark" ? "active" : ""}`}
          onClick={() => handleButtonClick("pitchMark")}
        >
          PitchMark
        </Button>
        <Button
          size="medium"
          className={`tabbutton ${selectedValue === "variable" ? "active" : ""}`}
          onClick={() => handleButtonClick("variable")}
        >
          Variable
        </Button>
      </div>
      <Divider />
      <div >
        {selectedValue === "start" && <Start />}
        {selectedValue === "pitchMark" && <PitchMark />}
        {selectedValue === "variable" && <Variable />}
      </div>
    </div>
  );
};
