/**
 * @file: 筛选人员
 * @author：wangshiying@zufangit.cn
 */

import React, { Component, PropTypes } from 'react';
import Tpl from './template.rt';
import Msg from './../../../../common/util/message.js';
import './style.less';

export default class PersonFilter extends React.Component {

    componentWillMount() {
        this.setState({
            cityList: [],
            filter: $.extend(true, {}, this.props.filter)
        });

        this.getCityList();
    }

    getCityList () {
        var me = this;
        // var cityList = Store.get('dingdingAuthCityOptions') || [];
        var cityList = this.props.cityList || [];
        var cityProcess = [];

        if (me.cityTimer) {
            clearTimeout(me.cityTimer);
        }

        if (cityList && cityList.length > 0) {
            $.each(cityList, function (index, item) {
                if (item.cityName !== "燕郊") {
                    cityProcess.push(item);
                }
            });
            this.setState({
                cityList: cityProcess
            });
        }
        else {
            me.cityTimer = setTimeout(function () {
                me.getCityList();
            }, 1000)
        }
    }


    /**
     * input 输入框改变
     * @param {event} e
     */
    changeInputFilter(e) {
        var target = $(e.target);
        var filters = this.state.filter.filter || {};
        var field = target.attr('data-field');
        var val = target.val().trim();
        if (field === 'agent') {
            delete filters['agentName'];
            delete filters['agentPhone'];
            delete filters['agentNo'];
            field = 'agentName'
            if ($.isNumeric(val) && val.length === 11) {
                field = 'agentPhone'
            }
            if ($.isNumeric(val) && val.length === 8) {
                field = 'agentNo'
            }
        }

        if (field === 'cus') {
            delete filters['userName'];
            delete filters['userPhone'];
            field = 'userName'
            if ($.isNumeric(val) && val.length === 11) {
                field = 'userPhone'
            }
        }

        filters[field] = target.val().trim();
        this.state.filter.filter = filters;
        this.setState({
            filter: this.state.filter
        });
    }

    /**
     * select 改变
     * @param {object} 改变的值
     */
    changeSelectFilter (param) {
        var me = this.reactObj;
        var filters = me.state.filter.filter || {};
        if (param != -1) {
            filters[this['data-field']] = param;
        }
        else {
            delete filters[this['data-field']];
        }
        me.state.filter.filter = filters;
        me.setState({
            filter: me.state.filter
        });
    }

    /**
     * 点击查询
     */
    changeFilter() {
        if (this.state.filter && this.state.filter.filter.cityId) {
            var filter = $.extend(true, {}, this.state.filter);
            if (filter.filter.orderState === -1) {
                delete filter.filter.orderState;
            }

            if (filter.filter.cusType === -1) {
                delete filter.filter.cusType;
            }
            filter.pageNo = 1;
            this.props.onFilterClick(filter);
        }
    }

    /**
     * props发生变化的时候，更新state
     * @param {Object} nextProps 即将要更新的props
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            filter: $.extend(true, {}, nextProps.filter)
        });
    }

    render() {
        return Tpl.apply(this);
    }
}

PersonFilter.propTypes = {
    onFilterClick: PropTypes.func.isRequired, // 点击查询后的filter处理函数
    filter: PropTypes.object.isRequired // 目前的filter
};
