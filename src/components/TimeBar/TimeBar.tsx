import React, { useMemo, useState } from "react";
import useStyles from "./TimeBar.style";
import { Box, Typography } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/useTypeSelector";
import { setMode, setStartingMin } from "../../redux/actions/settingsAction";

const TimeBar = () => {
  const classes = useStyles();
  const reduxDispatch = useAppDispatch();
  const { mode, pomodoro, shortTime, longTime, startingMinutes } = useAppSelector((state) => state?.settings);
//   const modeValue = useMemo(() => {
//     if (mode === "pomodoro")
//     set()
//   }, [mode])

  function onClick1() {
    setMode("pomodoro")(reduxDispatch);
    setStartingMin(pomodoro)(reduxDispatch);
    console.log(mode)
    console.log(startingMinutes)
  }

  function onClick2() {
    setMode("shortTime")(reduxDispatch);
    setStartingMin(shortTime)(reduxDispatch);
    console.log(mode)
    console.log(startingMinutes)
  }

  function onClick3() {
    setMode("longTime")(reduxDispatch);
    setStartingMin(longTime)(reduxDispatch);
    console.log(mode)
    console.log(startingMinutes)
  }
  return (
    <Box className={classes.main}>
      <Box
        onClick={onClick1}
        className={mode === "pomodoro" ? `${classes.active}` : `${classes.notActive}`}
      >
        pomodoro
      </Box>
      <Box onClick={onClick2} className={mode === "shortTime" ?`${classes.active}` : `${classes.notActive}`}>
        short break
      </Box>
      <Box onClick={onClick3} className={mode === "longTime" ? `${classes.active}` : `${classes.notActive}`}>
        long break
      </Box>
    </Box>
  );
};

export default TimeBar;
