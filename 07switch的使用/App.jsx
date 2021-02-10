import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import About from "./compnents/pages/About";//路由组件
import Home from "./compnents/pages/Home";//路由组件
import Header from "./compnents/Header";//一般组件
import MyNavLink from "./compnents/MyNavLink/MyNavLink";
import Test from "./compnents/pages/Test/Test";

export default class App extends Component {
    render() {
        return (

            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*原生html*/}
                            {/*  <a className="list-group-item" href="./about.html">About</a>
                                <a className="list-group-item active" href="./home.html">Home_News</a>*/}
                            {/*react靠路由链接实现*/}
                         {/*   <NavLink activeClassName="selfDe" className="list-group-item " to="/about" >About</NavLink>
                            <NavLink activeClassName="selfDe"  className="list-group-item N" to="/home">Home_News</NavLink>*/}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">

                                <Switch>
                            {/*        注册路由*/}
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Test}/>
                                    <Route path="/home" component={Home}/>

                                </Switch>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

