import { makeStyles } from '@material-ui/core';
import { ITheme } from '../../types/theme';

const useStyles = makeStyles((theme: ITheme) => ({
  paper: {
    position: 'absolute',
    width: 700,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default useStyles;