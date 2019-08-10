import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

const root = (
    <Router>
        <App />
    </Router>
)

ReactDOM.render(root, document.getElementById('root'));

