import React, {Component} from 'react';
import PropTypes from "prop-types";
import Item from '../Item';
import './index.css'

 export  default class List extends Component {
     //必要性限制
     static propTypes={
         todos:PropTypes.array.isRequired,
         updateCheck:PropTypes.func.isRequired,
         delItem:PropTypes.func.isRequired
     }
    render() {
        const {todos,updateCheck,delItem}=this.props

        return (
            <ul className="todo-main">
                {
                 todos.map( (todo) => {
                          return <Item key={todo.id} {...todo} updateCheck={updateCheck} delItem={delItem}/>
                         })
                }

            </ul>
        );
    }
}
