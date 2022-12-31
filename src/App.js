import React from 'react';
import { Toaster } from 'react-hot-toast';

import { AppProvider } from 'providers/app';
import { Routes } from 'providers/routes';
import ThemeProvider from 'theme';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Routes />
        <Toaster position="top-right" reverseOrder={false} />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
