import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import LightTheme from 'themes/light';
import DarkTheme from 'themes/dark';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${p => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${p => p.theme.bodyFontColor};
    font-family: 'Kaushan Script';
  }
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider theme={{
      ...theme, setTheme: () => {
        setTheme(state => state.id === 'dark' ? LightTheme : DarkTheme)
      }
    }}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
