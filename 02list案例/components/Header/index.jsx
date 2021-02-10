import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {nanoid} from "nanoid";
import './index.css'

export default class Header extends Component {
    //必要性限制
    static propTypes={
        addTodo:PropTypes.func.isRequired
    }
    keyupHander = (event) => {
        const {keyCode, target} = event
        if (keyCode !== 13) return
        const todoObj={id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)
    }

    render() {

        return (
            <div className="todo-header">
                <input onKeyUp={this.keyupHander} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}
