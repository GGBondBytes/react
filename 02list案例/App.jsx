//创建外壳组件
import React, {Component} from 'react'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'

export default class App extends Component {

    //初始化状态
    state = {
        todos: [
            {id: '001', name: 'AAA', done: true},
            {id: '002', name: 'BBB', done: true},
            {id: '003', name: 'CCC', done: false}
        ]
    }
    //增加一个todo,参数是todo对象
    addTodo = (todoObj) => {
        //获取原数组
        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        console.log(newTodos)
        this.setState({todos: newTodos})
    }
    //更新勾选框的状态
    updateCheck = (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map(
            (todoObj) => {
                if (todoObj.id === id) return {...todoObj, done: done}
                else return todoObj
            })
        this.setState({todos: newTodos})
    }
    //删除一个item
    delItem = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({todos: newTodos})
    }
    //设置全选
    checkAll = (done) => {
        const {todos} = this.state
        const newTodos = todos.map(
            (todoObj) => {
                return {...todoObj, done: done}
            }
        )
        this.setState({todos: newTodos})
    }
//清除所有已经完成的
    clearAllDone = () => {
        const {todos} = this.state
        const  newTodos = todos.filter(
            (todoObj) => {
                // return todoObj.done!==false
                return !todoObj.done

            }
        )
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (

            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateCheck={this.updateCheck} delItem={this.delItem}/>
                    <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }

}