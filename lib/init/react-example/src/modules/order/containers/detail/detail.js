/**
 * @file: 订单详情
 * @author：wangshiying@zufangit.cn
 */

import React, { Component, PropTypes } from 'react';
import Tpl from './template.rt';
import Msg from './../../../../common/util/message.js';
import './style.less';
import Url from './../../../../common/util/url.js';

export default class PersonFilter extends React.Component {

    componentWillMount() {
        this.setState({
            isLoading: true,
            orderId: Url.query('agentOrderId') + '',
            columns: [
                {
                    title: '房源编号',
                    dataIndex: '',
                    render: function(text, item, index) {
                        if (item && item.houseSourceCode) {
                            var href = "#/house/show?productId=" + item.productId + "&cityId=" + item.cityId;
                            return <a target="_blank" href={href}>{item.houseSourceCode}</a>;
                        }
                        else {
                            return '-';
                        }

                    }
                },
                {
                    title: '房源状态',
                    render: function(text, item, index) {
                        if (item.state) {
                            var arr = ['-', '待审核', '待租中', '已下架', '已锁定', '已出租'];
                            return arr[item.state] || '-';
                        }
                        else {
                            return '-';
                        }

                    }
                },
                {
                    title: '子订单状态',
                    render: function(text, item, index) {
                        if (item.state) {
                            var arr = ['-', '待看', '已看', '签约中', '已签约', '已取消'];
                            return arr[item.orderItemStatus] || '-';
                        }
                        else {
                            return '-';
                        }

                    }
                }
            ],
            data: {
                agentOrderDetail: {
                    houseList: []
                }
            },
            orderStep: null,
            orderStepColumns: [
                {
                    title: '跟进时间',
                    dataIndex: '',
                    render: function(text, item, index) {
                        return item.evaluateTime || '-';
                    }
                },
                {
                    title: '跟进人姓名',
                    dataIndex: '',
                    render: function(text, item, index) {
                        return item.evaluateName || '-';
                    }
                },
                {
                    title: '跟进人身份',
                    dataIndex: '',
                    render: function(text, item, index) {
                        return item.evaluateProfile || '-';
                    }
                },
                {
                    title: '跟进人电话',
                    dataIndex: '',
                    render: function(text, item, index) {
                        return item.evaluatePhone || '-';
                    }
                },
                {
                    title: '跟进内容',
                    dataIndex: '',
                    render: function(text, item, index) {
                        return item.content || '-';
                    }
                }
            ]
        });
        this.getDetail();
        this.getProgress();
        this.getSteps();
    }

    getDetail() {
        var me = this;
        var agentOrderId = Url.query('agentOrderId');
        if (agentOrderId) {
            Ajax.send(
                'GET/order/agentOrderDetailForBack.do',
                {
                    agentOrderId: Url.query('agentOrderId') + ''
                }
            ).done(
                function (res) {
                    if (res && res.code === 100000 && res.data) {
                        me.setState({
                            isLoading: false,
                            data: res.data
                        })
                    }
                }
            );
        }
    }

    getProgress () {
        var me = this;
        var agentOrderId = Url.query('agentOrderId');
        if (agentOrderId) {
            Ajax.send(
                'GET/orderTrack/orderTrack.do',
                {
                    pageSize: 10000, // Integer类型  页面条数
                    pageNo: 1, // Integer类型  页码
                    orderId: Url.query('agentOrderId') + ''
                }
            ).done(
                function (res) {
                    if (res && res.code === 100000 && res.data && res.data.listData && res.data.listData.length) {
                        me.setState({
                            isLoading: false,
                            progress: res.data.listData
                        });
                    }
                }
            );
        }
    }

    getSteps () {
        var me = this;
        var agentOrderId = Url.query('agentOrderId');
        var uid = Url.query('uid');
        if (agentOrderId && uid) {
            Ajax.send(
                'GET/agentEvaluateCustomer/agentEvaluateListOfCustomer.do',
                {
                    pageSize: 10000, // Integer类型  页面条数
                    pageNo: 1, // Integer类型  页码
                    filter: {
                        uid: uid,
                        orderId: Url.query('agentOrderId')
                    }
                }
            ).done(
                function (res) {
                    if (res && res.code === 100000 && res.data && res.data.listData && res.data.listData.length) {
                        me.setState({
                            isLoading: false,
                            orderStep: res.data.listData
                        });
                    }
                }
            );
        }
    }

    render() {
        return Tpl.apply(this);
    }
}

