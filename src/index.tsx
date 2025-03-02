import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { RouteConfig } from './routes';
import { ScrollToTop } from './atoms';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
const basename = process.env.PUBLIC_URL;
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter basename={basename}>
        <ScrollToTop />
        <Routes>
          {Object.entries(RouteConfig).map(([path, Component]) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
