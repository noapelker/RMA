import React from 'react';
import Home from "./Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Order from "./order/profile/Order";
import AddOrder from "./order/add/AddOrder";

const Main = _ => {
    return (
        <div className={'mainContainer'}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/order/add" component={AddOrder}/>
                    <Route  path="/orders" component={Order}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Main;