import React, { useMemo } from 'react'
import useStyles from './Pomodoro.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SettingsIcon } from '../../Resources/settings - icon.svg'
import { Box, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

type Props = {}

const Pomodoro = (props: Props) => {
  const classes = useStyles()
  // const appTheme = useSelector((state) => state?.app?.appTheme);
  // const dispatch = useDispatch();
  // const onToggleTheme = () => {
  //   setAppTheme()(dispatch);
  // };
  // const modeIcon = useMemo(() => {
  //   if (appTheme === 'light') {
  //     return <FontAwesomeIcon icon={faSun} />;
  //   } return <FontAwesomeIcon icon={faMoon} />;
  // }, [appTheme]);
  return (
    <Box className={classes.min}>
      <Typography className={classes.headerTxt}>Pomodoro</Typography>
      <Box className={classes.timerBox}></Box>
      <Box className={classes.settingsBox}>
         <SettingsIcon />
      </Box>
    </Box>
  )
}

export default Pomodoro;