import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/globalStyles.js';
import theme from './styles/theme.js';

import { ThemeProvider } from 'styled-components';
import { CreateMovie } from './pages/CreateMovie';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { MoviePreview } from './pages/MoviePreview';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles/>
        <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
