import { Theme, ThemeOptions } from '@material-ui/core';

declare module '@material-ui/core' {
  interface CustomTheme extends Theme {
    palette: {
      [any] : {
        main: string;
      }
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    palette?: {
        [any]? : {
            main?: string;
        }
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}