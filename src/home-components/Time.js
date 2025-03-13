import React, { useState, useEffect } from "react";
import foto1 from '../img/1415dd77cf58afac772f8b555836cd71.png';
import foto2 from '../img/2ba429f345cb007f427d514d84040e83.png';

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="timeclock">
        <div className="time">
        <h1>Time to make new outfits</h1>
          {formatTime(time)}
        </div>
        <div className="time-image">
            <img
                src={foto2}
                alt="Model"
                className="model1" />
            <img
                src={foto1}
                alt="Model"
                className="model2" />
        </div>
    </div>
  );
};

export default Time;
