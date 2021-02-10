import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: '错误', errorInfo: '错误信息' };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })

    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>出错了</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({counter}) => ({
            counter: counter + 1
        }));
    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('出错了了了了了了了了');
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}

export default function ErrorBoundary_test() {
    return (
        <div>
            <p>
                <b>
                    这是React 16中错误边界的示例。
                    <br /><br />
                    单击数字以增加计数器。
                    <br />
                    计数器被编程为在达到5时抛出。这将模拟组件中的JavaScript错误。
                </b>
            </p>
            <hr />
            <ErrorBoundary>
                <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>
            <hr />
            <p>这两个计数器都在各自的错误边界内。因此，如果其中一个崩溃，则另一个不受影响。</p>
            <ErrorBoundary><BuggyCounter /></ErrorBoundary>
            <ErrorBoundary><BuggyCounter /></ErrorBoundary>
        </div>
    );
}
