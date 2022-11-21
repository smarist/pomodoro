import React, { useState } from 'react'
import useStyles from './Pomodoro.styles'
import { ReactComponent as SettingsIcon } from '../../Resources/settings - icon.svg'
import { Box, Typography } from '@material-ui/core'
import Modal from '../../components/Modal';
import ProgressCircle from '../../components/ProgressCircle';


const Pomodoro = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Box className={classes.min}>
      <Typography className={classes.headerTxt}>Pomodoro</Typography>
      <Box className={classes.timerBox}>
        <ProgressCircle />
      </Box>
      <Box className={classes.settingsBox} onClick={handleOpen}>
         <SettingsIcon />
      </Box>
      <Modal open={open} setOpen={setOpen}/>
    </Box>
  )
}

export default Pomodoro;