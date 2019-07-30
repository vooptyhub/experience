import React, {Component, Fragment} from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css'
import {CssBaseline} from '@material-ui/core'

class App extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <Helmet title="You Are Doing Great"/>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to experience app</h2>
                </div>
                {this.props.children}
            </Fragment>
        );
    }
}

export default App;