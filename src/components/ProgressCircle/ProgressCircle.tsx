import React, { useEffect, useMemo, useRef } from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useAppSelector } from "../../redux/hooks/useTypeSelector";
import useStyles from "./ProgressCircle.style";

function CircularProgressWithLabel(
  props: CircularProgressProps & { 
    buttonText: string,
    timerMinutes: string | string | any,
    timerSeconds: string | number,
    handleStart: any,
    handleRestart: any,
    handlePause: any,
   }
) {
  const classes = useStyles();
  const {
    hasStarted,
    timerDidEnd,
    appColor,
    appFont,
  } = useAppSelector((state) => state?.settings);

  return (
    <Box className={classes.circleBox}>
      <CircularProgress
        variant="determinate"
        size={280}
        thickness={2}
        {...props}
        style={{
          color: appColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      />
      <Box
        style={{
          marginTop: "-10px",
          marginLeft: "10px",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          style={{
            fontSize: "36px",
            color: "#FFF",
            fontFamily: appFont,
          }}
        >
          {`${props.timerMinutes}:${props.timerSeconds}`}
        </Typography>
        {!hasStarted && (
          <Box onClick={props.handleStart} className={classes.actBtn}>
            start
          </Box>
        )}
        {hasStarted &&
          (!timerDidEnd ? (
            <Box onClick={props.handlePause} className={classes.actBtn}>
              {props.buttonText}
            </Box>
          ) : (
            <Box onClick={props.handleRestart} className={classes.actBtn}>
              restart
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default function ProgressCirlce() {
  // const [progress, setProgress] = React.useState(0);
  const {
    startingMinutes,
    startingSeconds,
    pomodoro,
    shortTime,
    longTime,
    minutes,
    seconds,
    hasStarted,
    pause,
    mode,
    timerDidEnd,
  } = useAppSelector((state) => state?.settings);

  // const allocatedTime = useMemo(() => {
  //   if (mode === "pomodoro") {
  //     return pomodoro;
  //   }
  //   if (mode === "short") {
  //     return shortTime;
  //   }
  //   return longTime;
  // }, [longTime, pomodoro, shortTime, mode]);
  // console.log(allocatedTime);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= allocatedTime ? 0 : prevProgress + 1
  //     );
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [allocatedTime]);
  // let interval = useRef();
  let interval: any | string | number | NodeJS.Timer | undefined;
  const buttonText = !hasStarted ? "start" : pause ? "resume" : "pause";
  const timerMinutes = startingMinutes < 10 ? `0${startingMinutes}` : startingMinutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    if (!pause && hasStarted) {
      interval = setInterval(() => {
        clearInterval(interval);

        if (seconds === 0) {
          if (minutes === 0) {
            // dispatch({ type: "timerEnd" });
          } else {
            if (!pause && hasStarted) {
              // dispatch({ type: "decrementMinute" });
            }
          }
        } else {
          if (!pause && hasStarted) {
            // dispatch({ type: "decrementSeconds" });
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes, pause, hasStarted]);

  const handlePause = () => {
    clearInterval(interval);
    // dispatch({
    //   type: "pause",
    // });
  };

  const handleRestart = () => {
    clearInterval(interval);
    // dispatch({ type: "restart" });
  };

  const handleStart = () => {
    clearInterval(interval);
    // dispatch({ type: "start" });
  };

  return (
    <CircularProgressWithLabel 
      buttonText={buttonText}
      timerMinutes={timerMinutes}
      timerSeconds={timerSeconds}
      handleStart={handleStart}
      handleRestart={handleRestart}
      handlePause={handlePause}
    />
  );
}

