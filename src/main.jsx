import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { GlobalStyle } from './globalStyle/GlobalStyle.jsx'
import { theme } from './globalStyle/theme.jsx'
import { ThemeProvider } from 'styled-components'

import { register } from 'swiper/element/bundle';
register();
import 'swiper/css'
import 'swiper/css/bundle'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
