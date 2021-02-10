import React, {Component} from 'react';

const ThemeContext = React.createContext('light');
const UserContext = React.createContext({
    username: 'aaa',
    password: 'bbb'
});
export default class Context_consumes extends Component {
    // 提供初始 context 值的  组件
    render() {
        const {signedInUser, theme} = this.props;
        return (
        <ThemeContext.Privider value={theme}>
            <UserContext value={signedInUser}>
                <Layout/>
            </UserContext>
        </ThemeContext.Privider>
    );
    }
}

//
function Layout() {

    return (
        <div>
            <div>导航栏</div>
            <div>
                <Content/>
            </div>
        </div>
    )

}


// 一个组件可能会消费多个 context
function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <ProfilePage user={user} theme={theme} />
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}
 function ProfilePage()  {

  return (
   <div>
    登录
   </div>
  )

}
