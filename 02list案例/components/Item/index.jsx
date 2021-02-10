import React, {Component} from 'react';
import './index.css'

export default class Item extends Component {

    //状态在哪里，操作状态的方法就在哪里
    //鼠标状态
    state = {mouse: false}
    //移动鼠标设置item的背景变化
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }
    //修改勾选框的回调
    checkHandle = (id) => {
        return (event) => {
            this.props.updateCheck(id, event.target.checked)
        }
    }
    //删除按钮的回调
    DelItemHandle = (id) => {
     if (window.confirm('确定删除吗？？？？？')){
         this.props.delItem(id)
     }
    }

    render() {
        const {mouse} = this.state
        const {id, name, done} = this.props
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.checkHandle(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={() => {
                    this.DelItemHandle(id)
                }
                } className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除
                </button>
            </li>
        );
    }
}
