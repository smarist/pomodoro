import React from "react";
import Modal from "@material-ui/core/Modal";
import useStyles from "./Modal.style";
import { Box, Typography } from "@material-ui/core";
// import CheckIcon from '@mui/icons-material/Check';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

interface IHandleModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SimpleModal: React.FC<IHandleModalProps> = ({ open, setOpen }) => {
  const classes = useStyles();
  //   // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box style={modalStyle} className={classes.paper}>
      <Box className={classes.topView}>
        <Typography className={classes.text1}>Settings</Typography>
        <Box onClick={handleClose} className={classes.closeBtn}>
          X
        </Box>
      </Box>
      <Box className={classes.section1}>
        <Typography className={classes.time}>TIME (MINUTES)</Typography>
        <Box display="flex" flexDirection="row" className={classes.boxx}>
          <Box display="flex" flexDirection="column" className={classes.box}>
            <Typography>pomodoro</Typography>
            <input type="number" className={classes.input} />
          </Box>
          <Box display="flex" flexDirection="column" className={classes.box}>
            <Typography>short break</Typography>
            <input type="number" className={classes.input} />
          </Box>
          <Box display="flex" flexDirection="column" className={classes.box}>
            <Typography>long break</Typography>
            <input type="number" className={classes.input} />
          </Box>
        </Box>
      </Box>
      <Box className={classes.section2}>
        <Box display="flex" flexDirection="row" className={classes.boxx1}>
          <Typography>FONT</Typography>
          <Box display="flex" flexDirection="row" className={classes.fontBox}>
            <Box className={classes.fontFamily}>Aa</Box>
            <Box className={classes.fontFamily}>Aa</Box>
            <Box className={classes.fontFamily}>Aa</Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.section2}>
        <Box display="flex" flexDirection="row" className={classes.boxx2}>
          <Typography>COLOR</Typography>
          <Box display="flex" flexDirection="row" className={classes.fontBox}>
            <Box className={classes.fontFamily}>=</Box>
            <Box className={classes.fontFamily}>=</Box>
            <Box className={classes.fontFamily}>=</Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.btnBox}>
        <Box className={classes.btn}>Apply</Box>
      </Box>
    </Box>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};

export default SimpleModal;
