/**
 * @file: 列表
 * @author：wangshiying@zufangit.cn
 */

import React, { Component, PropTypes } from 'react';
import Tpl from './template.rt';
import './style.less';

export default class OrderList extends Component {

    componentWillMount() {
        var me = this;
        var columns = [
                {
                    title: '',
                    dataIndex: 'agentOrderId',
                    render: function(text, item, index) {
                        return <input type="radio" className="order-list-inner-input"
                        name="orderItem" value={index} onClick={me.choseOptItem.bind(me)}/>;
                    }
                },
                {
                    title: '城市',
                    dataIndex: 'cityName',
                    render: function(text, item, index) {
                        if (me.props.filter.filter && me.props.filter.filter.cityId) {
                            return me.getDepartCityName(me.props.filter.filter.cityId);
                        }
                        else {
                            return '-';
                        }
                    }
                },
                {
                    title: '客户',
                    dataIndex: 'cus',
                    width: 150,
                    render: function(text, item, index) {
                        var arr = [];
                        arr.push(<div>姓名：{item.userName || '-'}</div>);
                        arr.push(<div>电话：{item.userPhone || '-'}</div>);
                        return arr;
                    }
                },
                {
                    title: '客户类型',
                    dataIndex: 'userType',
                    render: function(text, item, index) {
                        var type = '-';
                        if (item.userType === 1) {
                            type = '线上';
                        }
                        else {
                            type = '线下';
                        }
                        return type;
                    }
                },
                {
                    title: '预约地点',
                    dataIndex: 'appointLocation',
                    render: function(text, item, index) {
                        return item.appointLocation  || '-';
                    }
                },
                {
                    title: '订单状态',
                    dataIndex: 'agentOrderStatus',
                    render: function(text, item, index) {
                        //1、待确认;2、待签约;3、已签约; 4、已关闭; 5、正在派单,6、暂缓订单
                        var status = ['', '待确认', '待签约', '已签约', '已关闭',
                            '正在派单', '暂缓订单'];
                        return status[item.agentOrderStatus]  || '-';
                    }
                },
                {
                    title: '经纪人',
                    dataIndex: 'agent',
                    width: 150,
                    render: function(text, item, index) {
                        var arr = [];
                        arr.push(<div>姓名：{item.agentName || '-'}</div>);
                        arr.push(<div>系统号：{item.agentNo || '-'}</div>);
                        arr.push(<div>电话：{item.agentPhone || '-'}</div>);
                        return arr;
                    }
                },
                {
                    title: '部门名称',
                    dataIndex: 'deptName',
                    render: function(text, item, index) {
                        return item.deptName;
                    }
                },
                {
                    title: '下单时间',
                    dataIndex: 'userOrderTime',
                    render: function(text, item, index) {
                        return item.userOrderTime || '-';
                    }
                },
                {
                    title: '订单确认时间',
                    dataIndex: 'orderConfirmTime',
                    render: function(text, item, index) {
                        return item.orderConfirmTime || '-';
                    }
                }

            ];
        this.setState({
            columns: columns
        });
    }

    getDepartCityName(cityId) {
        var city = this.props.cityList || [];
        var cityName = '';
        var item;
        var len = city.length;
        for (var i = 0; i < len; i++) {
            item = city[i];
            if (+item.cityId === +cityId) {
                return item.cityName;
            }
        }

        return '';
    }

    /**
     * 选中某个要操作的项目
     *
     * @param {event} e
     */
    choseOptItem(e) {
        var orderList = this.props.orderObj.orderList;
        var target = $(e.target);
        var index = +target.attr('value');
        orderList[index]['index'] = index;
        this.props.choseModifyItem(orderList[index]);
    }

    /**
     * 翻页
     *
     * @param {number} page 页码
     */
    onPageChange(page) {
        this.setState({
            orderList: []
        });
        this.props.filter.pageNo = page;
        this.props.onFilterClick(this.props.filter);
        // 强制翻页的时候，去掉选中的项目
        $('.order-list-inner-input:checked').prop('checked', false);
    }

    /**
     * props发生变化的时候，更新state
     * @param {Object} nextProps 即将要更新的props
     */
    componentWillReceiveProps(nextProps) {
        // 强制翻页的时候，去掉选中的项目
        if (this.props.orderObj !== nextProps.orderObj) {
            $('.order-list-inner-input:checked').prop('checked', false);
        }
    }

    render() {
        return Tpl.apply(this);
    }
}

OrderList.propTypes = {
    orderObj: PropTypes.object.isRequired, // 列表
    onFilterClick: PropTypes.func.isRequired, // filter处理函数
    choseModifyItem: PropTypes.func.isRequired // 更改操作项
};
