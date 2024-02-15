"use client";
import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import moment from "moment";

interface CountdownTimerProps {
  targetDate: string; // Format: 'YYYY-MM-DDTHH:mm:ss'
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(
    moment(targetDate).diff(moment(), "milliseconds")
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(moment(targetDate).diff(moment(), "milliseconds"));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Countdown has ended
      return <span>Lecture ends!</span>;
    } else if (days >= 1) {
      // More than 1 day remaining
      return <span>On Coming</span>;
    } else {
      // Render countdown
      return (
        <span className="countdown font-mono text-2xl">
          <span style={{ "--value": `${hours}` } as React.CSSProperties}></span>
          :
          <span
            style={{ "--value": `${minutes}` } as React.CSSProperties}
          ></span>
          :
          <span
            style={{ "--value": `${seconds}` } as React.CSSProperties}
          ></span>
        </span>
      );
    }
  };

  return (
    <Countdown
      date={moment().add(timeRemaining).toDate()}
      renderer={renderer}
    />
  );
};

export default CountdownTimer;
