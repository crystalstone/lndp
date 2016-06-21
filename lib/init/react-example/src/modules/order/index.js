/**
 * 一个redux 例子
 */
import React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Order from './containers/order.js';
import orderApp from './reducers/reducers';
import thunk from 'redux-thunk';
import {render} from 'react-dom';

let buildStore = compose(applyMiddleware(thunk))(createStore)
let store = buildStore(
    orderApp,
    {
        orderObj: {orderList: [], totalCount: 1},
        filter: {pageNo: 1, pageSize: 10, filter: {}},
        optItem: {},
        cityList: []
    }
);

export default class OrderModule extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Order />
            </Provider>
        );
    }
}
