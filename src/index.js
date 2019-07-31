import React from 'react';
import {render} from 'react-snapshot'
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {HomePage} from "./Pages/HomePage";
import {Content} from "./content";
import _ from "lodash";
import {ExperiencePage} from "./Components/ExperiencePage";

render(
    <Router>
        <Route path="/" component={App}>
            <Route component={HomePage} path="/" exact/>
            {Content.map(({name, img, ...rest}) => <Route path={`/${_.kebabCase(name)}`} render={() =>
                <ExperiencePage title={name}
                                image={img}
                                {...rest}/>
            }/>)}

        </Route>
    </Router>,
    document.getElementById('root')
);