/**
 * @file: 订单管理主入口
 * @author：wangshiying@zufangit.cn
 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../actions/actions';
import OrderList from './list/list';
import Filter from './filter/filter';
import './style.less';

class App extends Component {

    componentWillMount() {
        // 获得全部角色
        //初始化城市列表
        this.props.actions.cityListAsync({
            staffId: '123',
            module: 4,
            operate: 1
        });
    }

    render() {
        const {orderObj, actions, cityList, filter, optItem} = this.props;
        return (
            <div className="person-container row">
                <div className="col-24 person-main-container">
                    <Filter
                        filter={filter}
                        cityList={cityList}
                        onFilterClick={actions.filtetAsync}
                    />
                    <OrderList
                        filter={filter}
                        cityList={cityList}
                        orderObj={orderObj}
                        choseModifyItem={actions.choseOptItem}
                        onFilterClick={actions.filtetAsync}
                    />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    orderObj: PropTypes.object.isRequired,
    filter: PropTypes.object.isRequired,
    optItem: PropTypes.object.isRequired,
    cityList: PropTypes.array.isRequired
};

export default connect(
    state => ({
        orderObj: state.orderObj,
        filter: state.filter,
        optItem: state.optItem,
        cityList: state.cityList
    }),
    dispatch => ({
        actions: bindActionCreators(Actions, dispatch)
    })
)(App);
