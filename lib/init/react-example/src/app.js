/**
 * 主文件
 */

import AJax from './common/util/ajax.js';
window.Ajax = AJax;


import React from 'react';
import ReactRouter from 'react-router';
import Menu from './component/nav/nav.js';
import 'antd/dist/antd.css';
import './style.less';

import appConfig from 'webpack-config-loader!../flagConf/config.js';

export default class App extends React.Component {

    componentWillMount () {
        this.setState({
            menuList: [
                {
                    menukey: 'order',
                    menuName: '订单管理',
                    menuHash: '/order',
                }
            ]
        });
    }

    render () {
        var tpl = [
            <Menu menuList={this.state.menuList}> </Menu>,
            <div className="page-main-container" >
                <div className = "page-main-wrapper" >
                {this.props.children}
                </div>
            </div>
        ];

        return (<div className="main row" style = {{height: '100%'}} > {tpl} </div>);
    }
}
