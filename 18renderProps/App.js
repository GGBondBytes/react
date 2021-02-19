import React from 'react';
import cat from './cat.jpg'

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <div>
                <img src={cat} style={{position: 'absolute', left: mouse.x, top: mouse.y}} alt={'NO IMG!'}/>
            </div>
        );
    }
}

class MouseWithCat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {x: 0, y: 0};
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
                {/*  <p>鼠标位置是：{this.state.x},{this.state.y}</p>
                <Cat mouse={this.state}/>*/}

                {/*  使用 `render`prop 动态决定要渲染的内容，而不是给出一个 <Mouse> 渲染结果的静态表示*/}
                {this.props.render(this.state)}
            </div>
        );

    }
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                {/*<MouseWithCat/>*/}

              {/*  使用render*/}
                <MouseWithCat render={mouse => (
                    <Cat mouse={mouse}/>
                    )}
                />
            </div>
        );
    }
}


