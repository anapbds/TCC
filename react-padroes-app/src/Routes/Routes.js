import React from 'react';
import {BrowserRouter, Switch,Route } from "react-router-dom";

import List from "../View/ListView/index";
import Login from "../View/LoginView/index";

function Routes () {
    return (

    <BrowserRouter>
            <Switch>
                  <Route  path="/list" component={List} exact />
                  <Route  path="/" component={Login} exact />
            </Switch>
    </BrowserRouter>
    );
}

export default Routes;
