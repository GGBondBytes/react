import React, {Component} from 'react';
import {Button,Rate,TreeSelect,Table,Layout, Menu} from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;
const { TreeNode } = TreeSelect;
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },

];

const data = [
    {
        key: '1',
        name: 'AAA',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'BBB',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'CCC',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
export default class App extends Component {
    state = {
        value: undefined,
        collapsed: false
    };

    onChange = value => {
        console.log(value);
        this.setState({ value });
    };


    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        };

    render() {
        return (

            <div>
                <Button type="primary">Primary Button</Button>
                <Button type="link">Primary Button</Button>
                <Rate allowHalf defaultValue={2.5} />
                <TreeSelect
                    showSearch
                    style={{ width: '50%' }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    treeDefaultExpandAll
                    onChange={this.onChange}
                >
                    <TreeNode value="parent 1" title="parent 1">
                        <TreeNode value="parent 1-0" title="parent 1-0">
                            <TreeNode value="leaf1" title="my leaf" />
                            <TreeNode value="leaf2" title="your leaf" />
                        </TreeNode>
                        <TreeNode value="parent 1-1" title="parent 1-1">
                            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} />
                        </TreeNode>
                    </TreeNode>
                </TreeSelect>
                <hr/>

                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                nav 1
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                                nav 2
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined />}>
                                nav 3
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </Header>
                        <Content>
                            <Table columns={columns} dataSource={data} />

                        </Content>
                    </Layout>
                </Layout>
            </div>

        );
    }
}

