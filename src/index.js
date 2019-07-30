import React from 'react';
import {render} from 'react-snapshot'
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {HomePage} from "./Pages/HomePage";
import {HouseOfCardsExperience} from "./Pages/HouseOfCardsExperience";
import {RussianSpyExperience} from "./Pages/RussianSpyExperience";

render(
    <Router>
        <Route path="/" component={App}>
            <Route component={HomePage} path="/" exact/>
            <Route path="/house-of-cards" component={HouseOfCardsExperience}/>
            <Route path="/russian-spy" component={RussianSpyExperience}/>
        </Route>
    </Router>,
    document.getElementById('root')
);