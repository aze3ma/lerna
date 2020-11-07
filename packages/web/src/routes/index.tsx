import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from '../pages/Home'

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact={true} component={HomePage} />
        </Switch>
    </Router>
)

export default Routes
