import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';    

import Login from "./pages/Login";
import Register from "./pages/Register";
import Confirm from "./pages/Register/Confirm";
import Comercios from "./pages/Comercios";

export default function Routes(){
    return  (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/cadastrar" exact component={Register}/>
                <Route path="/cadastrar/confirmacao" component={Confirm}/>
                <Route path="/comercios" component={Comercios} />
            </Switch>
        </BrowserRouter>
    );
}