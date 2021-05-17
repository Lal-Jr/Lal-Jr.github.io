import React, { useState } from "react";
import { Progress, BarDone, Name } from "./Progressbar.styles";

const ProgressBar = ({ item, done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <>
      <Name>{item}</Name>
      <Progress>
        <BarDone style={style}>{done}%</BarDone>
      </Progress>
    </>
  );
};

export default ProgressBar;
