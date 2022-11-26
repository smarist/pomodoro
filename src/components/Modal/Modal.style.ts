import { makeStyles } from '@material-ui/core';
import { ITheme } from '../../types/theme';

const useStyles = makeStyles((theme: ITheme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down('sm')]: {
      width: '85%',
      height: 420,
    },
    [theme.breakpoints.up('md')]: {
      width: 450,
      height: 420,
    },
    [theme.breakpoints.up('lg')]: {
      width: 450,
      height: 420,
    },
  },
  topView: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid black',
    padding: '20px',
  },
  time: {
    marginTop: '-10px',
  },
  text1: {
    fontWeight: 500,
    fontSize: '18px',
  },
  closeBtn: {
    cursor: 'pointer',
  },
  section1: {
    padding: '20px',
  },
  input: {
    backgroundColor: "#F4F5F9",
    border: "none",
    height: '30px !important',
    width: '90%',
    padding: '10px',
    borderRadius: '10px',
  },
  box: {
    width: '30%',
  },
  boxx: {
    borderBottom: '1px solid black',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '13px',
    marginTop: '25px',
  },
  section2: {
    padding: '15px 20px',
  },
  boxx1: {
    borderBottom: '1px solid black',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '24px',
  },
  boxx2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontBox: {
    //width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    marginTop: '-7px',
  },
  fontFamily: {
    backgroundColor: '#F4F5F9',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    padding: '5px',
    cursor: 'pointer',
    '&.active': {
      backgroundColor: '#303C479e',
      color: '#FFF',
    },
  },
  btnBox: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: '-140px',
    marginTop: '30px',
  },
  btn: {
    borderRadius: '20px',
    width: '60px',
    color: '#FFF',
    height: '10px',
    padding: '5px 20px 20px',
    // backgroundColor: ({appColor}) => (appColor),
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    cursor: 'pointer',
    indexZ: 1, 
  },
  color: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    padding: '5px',
    cursor: 'pointer',
    '&.orange': {
      backgroundColor: '#FF716E',
    },
    '&.blue': {
      backgroundColor: '#87CEFA',
    },
    '&.purple': {
      backgroundColor: '#BA55D3',
    },
  },
}));

export default useStyles;