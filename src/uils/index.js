/*
 * @Author: banlangen 
 * @Date: 2018-12-27 15:54:15 
 * @Last Modified by: xiaoliu
 * @Last Modified time: 2019-01-01 21:43:19
 */
/**
 *
 *
 * @export
 * @param {*} initialState 初始化 state
 * @param {*} handlers // 处理函数
 * @returns state
 * @description 
 *  reducers工具函数
 * 
 *  
 */
export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

/**
 *
 *
 * @param {*} data 数据源
 * @param {*} id // 顶级id
 * @param {*} path // basePath
 * @returns {}
 * @description 
 * 生成 tree
 */
export function getAppTree(data, id, path) {
    let cloneData = [...data];
    let routerData = [];
    let menuData = [];
    let breadcrumbNameMap = {}
    function genTree(list, nodeId, targetArr, basePath) {
        list.forEach((ele) => {
          // 只要有子集 就会重新遍历整个列表
            if (ele.parentId === nodeId.toString()) {
                ele.children = []
                ele.path = basePath + '/' + ele.path
                targetArr.push(ele)
                breadcrumbNameMap[ele.path] = ele
                genTree(list, ele.id, ele.children, ele.path);
                // genTree 执行完成后-- ele.children 会被改变
                // 副作用 太强列了
                if (ele.children.length === 0) {
                    routerData.push(ele)
                }
            }
        })
    }
    genTree(cloneData, id, menuData, path)
    console.log(breadcrumbNameMap)
    return {menuData, routerData, breadcrumbNameMap};
}
/**
 * 
 * @param {*} url 路径
 * @description 把路由解析成 数组
 */
export const urlToList = url => {
    const urllist = url.split('/').filter(i => i);
    return urllist.map((_, index) => `/${urllist.slice(0, index + 1).join('/')}`);
}