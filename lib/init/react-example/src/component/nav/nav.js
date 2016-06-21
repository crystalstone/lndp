import React from 'react';
import Tpl from './template.rt';
import './style.less';

export default class Menu extends React.Component {
    render() {
        return Tpl.apply(this);
    }
}
