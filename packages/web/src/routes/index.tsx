import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Register from '../modules/Register'

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/register" exact={true} component={Register} />
        </Switch>
    </Router>
)

export default Routes
