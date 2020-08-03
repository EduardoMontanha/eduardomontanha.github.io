import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Trading from './trading';
class Routes extends Component {
  render() {
    return (
        <Switch>
            <Route 
                exact
                path="/"
                render={() => <Redirect to="/trading"/>}
            />
            <Route path="/trading" component={Trading}/>
            <Route render={() => <Redirect to="/"/>}/>
        </Switch>
    )
  }
}

export default Routes;