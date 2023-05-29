import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/globalStyles.js';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { CreateMovie } from './pages/CreateMovie';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }> 
      <GlobalStyles/>
        <CreateMovie />
    </ThemeProvider>
  </React.StrictMode>,
)
