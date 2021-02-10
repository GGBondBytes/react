import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {withRouter} from 'react-router-dom'
class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }

    forWard = () => {
        this.props.history.goForward()
    }
    go = () => {
        this.props.history.go(-2)
    }

    render() {
        return (
            <div className="page-header"><h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forWard}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        );
    }
}

export default withRouter(Header)