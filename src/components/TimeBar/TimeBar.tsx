import React, { useState } from "react";
import useStyles from "./TimeBar.style";
import { Box, Typography } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/useTypeSelector";
import { setTimeType } from "../../redux/actions/settingsAction";

const TimeBar = () => {
  const classes = useStyles();
  const reduxDispatch = useAppDispatch();
  const { timeType } = useAppSelector((state) => state?.settings);
  const [time, setTime] = useState<string>(timeType);

  function onClick1() {
    setTimeType("pomodoro")(reduxDispatch);
  }

  function onClick2() {
    setTimeType("short")(reduxDispatch);
  }

  function onClick3() {
    setTimeType("long")(reduxDispatch);
  }
  return (
    <Box className={classes.main}>
      <Box
        onClick={onClick1}
        className={timeType === "pomodoro" ? `${classes.active}` : `${classes.notActive}`}
      >
        pomodoro
      </Box>
      <Box onClick={onClick2} className={timeType === "short" ?`${classes.active}` : `${classes.notActive}`}>
        short break
      </Box>
      <Box onClick={onClick3} className={timeType === "long" ? `${classes.active}` : `${classes.notActive}`}>
        long break
      </Box>
    </Box>
  );
};

export default TimeBar;
