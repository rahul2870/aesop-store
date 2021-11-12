import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
 

import Home from './HOME/Home';

export default function App() {


    return <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    </BrowserRouter>
}