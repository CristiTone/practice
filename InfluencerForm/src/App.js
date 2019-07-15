import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
