import { makeStyles } from '@material-ui/core';
import { ITheme } from '../../types/theme';

const useStyles = makeStyles((theme: ITheme) => ({
  min: {
   backgroundColor: theme.palette.bgColor.main,
   height: '95vh',
   overFlow: 'hidden !important',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
  },
  headerTxt: {
    color: theme.palette.textColor.main,
  },
  timerBox: {
    // marginTop: '160px',
    height: '50%',
    border: '2px solid red',
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsBox: {
    marginTop: '20px',
    width: '70px',
    height: '70px',
    border: '2px solid red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export default useStyles;
