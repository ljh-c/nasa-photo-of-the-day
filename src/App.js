import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AboveTheFold from "./components/AboveTheFold";

function App() {
  // * * * * TODAY'S DATE IN YYYY-MM-DD FORMAT
  const today = new Date();
  const todayDateYearMoDy = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  const [apod, setApod] = useState({});
  const [date, setDate] = useState(todayDateYearMoDy);

  const changeDate = (event, input) => {
    event.preventDefault();
    setDate(input);
  }

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=wJIOkWHVxfRrEKLdY8IAw29SgQy94LgEpCcdB9st&date=' + date)
    .then(response => {
      // console.dir(response.data);
      setApod(response.data);
    })
    .catch(error => {
      console.log('Data was not returned', error);
    });
  }, [date]);

  // * * * * THEMING WITH Material UI
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#462F6B' // imperial
      }
    },

    typography: {
      // 62.5% of 16px = 10px
      htmlFontSize: 10,

      fontFamily: '\'Source Sans Pro\', sans-serif',
      
      h1: {
        fontFamily: '\'Headland One\', serif',
        fontSize: '4.4rem'
      }
    }
  });

    // primary: '#729999',     // almost cyan
    // lightAccent: '#B69179', // pale taupe
    // darkAccent: '#877172',  // dark brown
    // bg: '#B3C2F2'            // almost black

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <div className="App">
              <AboveTheFold url={apod.url} date={apod.date} title={apod.title} explanation={apod.explanation} changeDate={changeDate}/>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

// 