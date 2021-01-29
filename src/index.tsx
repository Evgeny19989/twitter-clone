import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles'
import {BrowserRouter as Router} from 'react-router-dom'
import theme from './theme'
ReactDOM.render(
    <React.StrictMode>
        <CssBaseline/>
        <ThemeProvider theme={theme} >
            <Router>
            <App/>
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


