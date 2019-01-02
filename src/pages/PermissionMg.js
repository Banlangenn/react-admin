import React from 'react'
import  { Link } from 'react-router-dom'
export default function PermissionMg(){
    return <div>
        <h3>PermissionMg 侧边栏整体 依赖props-路由数据变化  <Link to= "/permission/about/about"> /permission/about/about</Link></h3>
        <h2>1. 怎么重定向子路由的第一个《解决》</h2>
        <h2>2. 有些路径不是菜单，需要一个标识不去渲染菜单</h2>
        <h2>3. 有些页面不需要面包屑，需要一个标识不去渲染面包屑</h2>
        <h2>4. 面包屑无法识别动态路由，需要路由正则解析依赖 暂不考虑</h2>
        <h2>4. content 代码混乱--模仿阿里--content  用一个大组件 包起来==</h2>     
    </div>
}
