import * as actionTypes from './../actions/actionTypes';
import { createReducer , getAppTree}  from './../uils'
    // function createReducer(initialState, handlers) {
    //     return function reducer(state = initialState, action) {
    //         if (handlers.hasOwnProperty(action.type)) {
    //             return handlers[action.type](state, action)
    //         } else {
    //             return state
    //         }
    //     }
    // }

    const initState = {
        menuData: [],
        routerData: []
    }
    function login(state, action) {
        return {...state, ...getAppTree(action.data, 0, '')}
    }
    function signOut (state, action) {
        // 这里边也是可以走逻辑的 为什么不把 渲染树 放在这个里边=== 一般的想法都是把数据拼好扔进来
        return initState
    }
    // 抵制大写常量

    //  抵制失败  用一半吧
    //  思考一下   用 sage 完全可以把  action 去掉呀
    export default createReducer(initState, {
       [actionTypes.LOGIN]: login,
       [actionTypes.SIGN_OUT] : signOut
    });


    
