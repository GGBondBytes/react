import React,{Component} from 'react'
import  hello from './index.module.css'
export  default class Index extends Component{
    render() {
        return(
            <h2 className={hello.title}>Nihao</h2>
        )
    }
}