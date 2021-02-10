//创建外壳组件
import React,{Component} from 'react'
import Index from "./components/Hello";
import Second from "./components/Second";
 export  default  class App extends Component {
    render() {
        return (
            <div>
              <Index/>
              <Second/>
            </div>
        )
    }

}