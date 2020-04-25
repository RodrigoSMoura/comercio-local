import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';    

import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Routes(){
    return  (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login}/>
                <Route path="/cadastrar" component={Register}/>
            </Switch>
        </BrowserRouter>
    );
}