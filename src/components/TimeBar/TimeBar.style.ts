import { makeStyles } from '@material-ui/core';
import { ITheme } from '../../types/theme';

const useStyles = makeStyles((theme: ITheme) => ({
  main: {
    display: 'flex',
    flexDirection: 'row',
    width: '24%',
    border: '1px solid #14192F',
    borderRadius: '30px',
    padding: '10px 20px',
    justifyContent: 'space-between',
    color: '#FFF',
    fontSize: '17px',
    height: '40px',
    backgroundColor: '#14192F',
    [theme.breakpoints.down('sm')]: {
        width: '84%',
      },
  },
  active: {
    backgroundColor: '#FF716E',
    color: '#1E2140',
    padding: '8px 17px 10px',
    borderRadius: '30px',
    fontSize: '17px',
    cursor: 'pointer',
  },
  notActive: {
    marginTop: '8px',
    cursor: 'pointer',
  },
}));

export default useStyles;