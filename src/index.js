import React from 'react';
import {render} from 'react-snapshot'
import { App} from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom'

render(
    <Router>
        <Route path="/" component={App}/>
    </Router>,
    document.getElementById('root')
);