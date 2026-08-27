import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./timer.scss";
import alarm from "./sounds/alarm.mp3";
import MenuButton from "../../../components/menu-button/MenuButton";

const DEFAULT_SESSION = 25 * 60;
const DEFAULT_BREAK = 5 * 60;

function Timer() {
  const [timerOn, setTimerOn] = useState(false);
  const [displayTime, setDisplayTime] = useState(DEFAULT_SESSION);
  const [breakTime, setBreakTime] = useState(DEFAULT_BREAK);
  const [sessionTime, setSessionTime] = useState(DEFAULT_SESSION);
  const [timerStatus, setTimerStatus] = useState("session");
  const [totalSeconds, setTotalSeconds] = useState(DEFAULT_SESSION);

  const breakTimeRef = useRef(breakTime);
  const sessionTimeRef = useRef(sessionTime);
  const timerStatusRef = useRef(timerStatus);

  useEffect(() => {
    breakTimeRef.current = breakTime;
  }, [breakTime]);

  useEffect(() => {
    sessionTimeRef.current = sessionTime;
  }, [sessionTime]);

  useEffect(() => {
    timerStatusRef.current = timerStatus;
  }, [timerStatus]);

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  };

  const changeTimerStatus = () => {
    setTimerOn(!timerOn);
  };

  const changeTime = (time, type) => {
    if (type === "break") {
      if ((breakTime <= 60 && time < 0) || (breakTime >= 3600 && time > 0)) {
        return;
      }
      const newBreak = breakTime + time;
      setBreakTime(newBreak);
      if (!timerOn && timerStatus === "break") {
        setDisplayTime(newBreak);
        setTotalSeconds(newBreak);
      }
    } else if (type === "session") {
      if (
        (sessionTime <= 60 && time < 0) ||
        (sessionTime >= 3600 && time > 0)
      ) {
        return;
      }
      const newSession = sessionTime + time;
      setSessionTime(newSession);
      if (!timerOn && timerStatus === "session") {
        setDisplayTime(newSession);
        setTotalSeconds(newSession);
      }
    }
  };

  const resetTimer = () => {
    setDisplayTime(DEFAULT_SESSION);
    setBreakTime(DEFAULT_BREAK);
    setSessionTime(DEFAULT_SESSION);
    setTotalSeconds(DEFAULT_SESSION);
    setTimerOn(false);
    setTimerStatus("session");
  };

  const playSound = () => {
    const sound = new Audio(alarm);
    sound.play();
  };

  useEffect(() => {
    if (!timerOn) return;

    const interval = setInterval(() => {
      setDisplayTime((prevTime) => {
        if (prevTime <= 1) {
          playSound();
          const nextStatus =
            timerStatusRef.current === "session" ? "break" : "session";
          const nextDuration =
            nextStatus === "break"
              ? breakTimeRef.current
              : sessionTimeRef.current;
          setTimerStatus(nextStatus);
          setTotalSeconds(nextDuration);
          return nextDuration;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerOn]);

  const isBreak = timerStatus === "break";

  return (
    <div className="timer">
      <MenuButton />
      <div className="timer-wrapper">
        <div className="timer-container">
          <span className={`status-badge ${isBreak ? "break" : "session"}`}>
            {isBreak ? "Break" : "Session"}
          </span>

          <div className="ring-wrapper">
            <CircularProgressbar
              className="progress-bar"
              text={formatTime(displayTime)}
              value={Math.floor((displayTime / totalSeconds) * 100)}
              styles={buildStyles({
                pathColor: isBreak ? "#80BDFA" : "#F43E2E",
                trailColor: "rgba(255, 255, 255, 0.12)",
                textColor: "#fff",
                textSize: "20px",
                pathTransitionDuration: 0.4,
              })}
            />
          </div>

          <div className="console">
            <div className="session-container">
              <div className="stepper">
                <p className="stepper-label">Session Length</p>
                <div className="stepper-controls">
                  <button
                    className="time-change-button"
                    aria-label="Decrease session length"
                    onClick={() => changeTime(-60, "session")}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <p className="stepper-value">{formatTime(sessionTime)}</p>
                  <button
                    className="time-change-button"
                    aria-label="Increase session length"
                    onClick={() => changeTime(60, "session")}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="stepper">
                <p className="stepper-label">Break Length</p>
                <div className="stepper-controls">
                  <button
                    className="time-change-button"
                    aria-label="Decrease break length"
                    onClick={() => changeTime(-60, "break")}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <p className="stepper-value">{formatTime(breakTime)}</p>
                  <button
                    className="time-change-button"
                    aria-label="Increase break length"
                    onClick={() => changeTime(60, "break")}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="button-container">
              <button
                className="timer-button primary"
                aria-label={timerOn ? "Pause timer" : "Start timer"}
                onClick={changeTimerStatus}
              >
                {!timerOn ? (
                  <i className="fa-solid fa-play"></i>
                ) : (
                  <i className="fa-solid fa-pause"></i>
                )}
              </button>
              <button
                className="timer-button"
                aria-label="Reset timer"
                onClick={resetTimer}
              >
                <i className="fa-solid fa-arrows-rotate"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
