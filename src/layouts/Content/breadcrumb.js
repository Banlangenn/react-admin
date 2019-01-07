import { Breadcrumb } from 'antd'
import React, { PureComponent } from 'react';
// import styles from './sider.module.scss'
import  { Link } from 'react-router-dom'
import { urlToList } from './../../uils'


export default class BreadcrumbView extends PureComponent {
    renderBreadcrumbItem = (pathname, breadcrumbNameMap) => {
        const BreadcrumbArray =  urlToList(pathname)
        return  BreadcrumbArray.map((item, index)=>{
            const { menuName } = breadcrumbNameMap[item] || {menuName: '403'}
            // 是不是 link== 最后一个不能点
            const isLinkable = index !== BreadcrumbArray.length - 1
            return <Breadcrumb.Item key={item}>
                {isLinkable ? <Link to={item}>{ menuName }</Link> : menuName }
            </Breadcrumb.Item>
        })
    }
    render() {
        const {breadcrumbNameMap, location: { pathname }} = this.props
        return <Breadcrumb>
            <Breadcrumb.Item key='/'>
                <Link to='/'>首页</Link>
            </Breadcrumb.Item>
            {this.renderBreadcrumbItem(pathname,breadcrumbNameMap)}
        </Breadcrumb>
    }
}
