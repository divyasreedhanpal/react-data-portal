import './App.css';
import Home from './pages/Home';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import PhysicalSchema from './pages/PhysicalSchema';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./fonts/UniversNextforHSBC-Bold.otf";

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#f44336',
    },
  },
  // '@global': {
  //   '*::-webkit-scrollbar': {
  //     width: '0.4em'
  //   },
  //   '*::-webkit-scrollbar-track': {
  //     '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
  //   },
  //   '*::-webkit-scrollbar-thumb': {
  //     backgroundColor: 'rgba(0,0,0,.1)',
  //     outline: '1px solid slategrey'
  //   }
  // }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter basename="/">
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/physical-schema" element={<PhysicalSchema/>}/>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;