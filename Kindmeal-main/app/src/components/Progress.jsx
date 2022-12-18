import React, { useEffect, useState } from "react";
import CircularProgress from "./CircularProgress";

const Progress = () => {
  const [time, setTime] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(65);
    }, 1000);
    setTimeout(() => {
      setTime(90);
    }, 1500);
  }, []);

  return (
    <div>
      <CircularProgress
        size={150}
        strokeWidth={75}
        percentage={time}
        color="#0bf"
      />
    </div>
  );
};

export default Progress;
