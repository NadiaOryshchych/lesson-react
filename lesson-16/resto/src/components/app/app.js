import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <Router>
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader/>
                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/cart-page' exact component={CartPage}/>
                </Switch>
            </div>
        </Router> 
    )
}

export default WithRestoService()(App);