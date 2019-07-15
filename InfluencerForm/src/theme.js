import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    button: {
      letterSpacing: '0px',
      textTransform: 'none',
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
    MuiLink: {
      underline: 'none',
    },
  },
  MuiSelect: {
    select: {
      variant: 'outlined',
      autoWidth: true,
    },
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        padding: 8,
        fontSize: 14,
      },
    },
    MuiInputBase: {
      formControl: {
        height: 34.4,
      },
    },
    MuiToolbar: {
      gutters: {
        '@media (min-width: 600px)': {
          paddingLeft: 70,
          paddingRight: 70,
        },
      },
    },
    MuiContainer: {
      maxWidthMd: {
        '@media (min-width: 960px)': {
          maxWidth: 800,
        },
      },
    },
    MuiTab: {
      root: {
        letterSpacing: '0px',
        fontWeight: 500,
      },
    },
  },
});

export default theme;
