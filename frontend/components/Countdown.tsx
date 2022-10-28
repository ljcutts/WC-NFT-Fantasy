type Props = {};
import { useState, useEffect, useRef } from "react";
import { TimeLeft } from "../interfaces/Countdown";
import Ball from "../public/img/ball.svg";
import Image from "next/image";
import bg from "../public/img/bg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Countdown = ({}: Props) => {
  const textRef = useRef(null);
  const footballRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const el = textRef.current;
    gsap.fromTo(
      el,
      { rotationX: "200vw" },
      {
        rotationX: 0,
        duration: 4,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  useEffect(() => {
    const el = footballRef.current;
    gsap.fromTo(
      el,
      { x: "-100vw" },
      {
        x: 0,
        duration: 2,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: el,
          start: "80% 100%",
        },
      }
    );
  }, []);
  const calculateTimeLeft = (): TimeLeft => {
    let year: number = new Date().getFullYear();
    const difference: number = +new Date(`${year}-11-20`) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const timerComponents: JSX.Element[] = [];

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Get the current time every second
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] == 0) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <section className="relative ">
      <div
        className="text-white 
      w-full -z-10 "
      >
        <div className="w-full ">
          <Image src={bg} layout="responsive" alt="background" />
        </div>
        <div
          className="absolute bottom-[23%] left-[25%] sm:left-[10%]"
          ref={textRef}
        >
          <p className="md:text-3xl mb:mb-6 text-lg sm:text-xl">
            Tournament starts in
          </p>
          <p className="md:text-6xl text-xl sm:text-2xl">
            {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} :{" "}
            {timeLeft.seconds}
          </p>
        </div>
        <div
          className="absolute xl:top-[0%] xl:left-[70%] z-4 "
          ref={footballRef}
        >
          <Ball className="lg:text-[400px] 3xl:text-[42rem] md:text-[400px] text-[200px]  " />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
