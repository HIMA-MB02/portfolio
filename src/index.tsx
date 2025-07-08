import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouteConfig } from './routes';
import { ScrollToTop } from './atoms';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {Object.entries(RouteConfig).map(([path, Component]) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
