import { makeStyles } from '@material-ui/core';
import { ITheme } from '../../types/theme';

const useStyles = makeStyles((theme: ITheme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down('sm')]: {
      width: '70%',
      height: 300,
    },
    [theme.breakpoints.up('md')]: {
      width: 400,
      height: 300,
    },
    [theme.breakpoints.up('lg')]: {
      width: 400,
      height: 300,
    },
  },
}));

export default useStyles;
