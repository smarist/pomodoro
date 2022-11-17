import { createTheme } from '@material-ui/core';
import { ThemeOptions } from "@material-ui/core/";
import { Palette } from "@material-ui/core/styles/createPalette";

interface IPalette extends Palette {
  stellaColor: {
    main: '#000'
  },
}
interface IThemeOptions extends ThemeOptions {
  palette: IPalette;
}

export const theme = createTheme({
  palette: {
    stellaColor: { main: '#000' },
    bgColor: { main: '#161932' },
    textColor: { main: '#FFF' },
  },
} as unknown as IThemeOptions);

export const darkTheme = createTheme({
  palette: {
    stellaColor: { main: '#FAFAFA' },
    bgColor: { main: '#FAFAFA' },
    textColor: { main: '#FFF' },
  },
} as unknown as IThemeOptions);
