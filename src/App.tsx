import React, { Suspense } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserViewerContainer, PostViewerContainer } from './components';
import theme from './common/theme';
import './App.css';

function App() {
  return (
    <Suspense fallback={<div className='loading-mask'>Loading...</div>}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route path="/" exact>
              <UserViewerContainer />
            </Route>
            <Route path="/posts/:userId" exact>
              <PostViewerContainer />
            </Route>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
