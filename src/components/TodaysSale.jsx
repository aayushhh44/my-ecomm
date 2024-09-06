import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2024-12-04T00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="p-4 sm:p-16">
      <div className="flex gap-2 items-center mb-2">
        <div className="bg-[#DB4444] rounded-sm h-8 w-4"></div>
        <p className="font-poppins">Today's</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16">
        <h1 className="text-2xl md:text-3xl sm:text-xl font-poppins text-nowrap">
          Flash Sales
        </h1>

        <div className="flex gap-2 sm:gap-4 items-center">
          <div className="flex items-center flex-col">
            <p>Days</p>
            <p className="text-2xl font-semibold font-poppins">
              {timeLeft.days}
            </p>
          </div>
          <p className="text-2xl text-[#DB4444]">:</p>

          <div className="flex items-center flex-col">
            <p>Hours</p>
            <p className="text-2xl font-semibold font-poppins">
              {timeLeft.hours}
            </p>
          </div>

          <p className="text-2xl text-[#DB4444]">:</p>

          <div className="flex items-center flex-col">
            <p>Minutes</p>
            <p className="text-2xl font-semibold font-poppins">
              {timeLeft.minutes}
            </p>
          </div>

          <p className="text-2xl text-[#DB4444]">:</p>

          <div className="flex items-center flex-col">
            <p>Seconds</p>
            <p className="text-2xl font-semibold font-poppins">
              {timeLeft.seconds}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
