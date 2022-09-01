import { useEffect, useState } from "react";

export const Timer = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const getAMorPM = () => {
    let hours = date.getHours();
    return Number(hours) < 12 ? "AM" : "PM";
  };

  return (
    <div>
      <div>
        <span className="text-2xl">{getAMorPM()}</span>
        {"  "}
        <span className="text-2xl">
          {date.toLocaleTimeString().substring(3)}
        </span>
      </div>
    </div>
  );
};
