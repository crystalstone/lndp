/**
 * @file 路由
 */

import React from 'react';
import { render } from 'react-dom';
import {
    Router,
    Route,
    Link,
    browserHistory
} from 'react-router';

import OrderModule from './modules/order/index.js';
import App from './app.js';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="order" component={OrderModule}/>
        </Route>
    </Router>
), document.getElementById('main'));
