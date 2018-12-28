import { take, put, call, fork, select } from 'redux-saga/effects'


// LOGIN
export function* getTree() {
  while (true) {
    const data = yield take('LOGIN')
    //  上边可以异步请求=>
    // 这边可以来个异步 请求接口
    // const state = yield select(state.userInfo) 

    // 可以获取其中一部分
    // 上下数据依赖用 call 不依赖 用 fork
    console.log(state)
    yield put({
        type: "GET_TREE",
        data: data.data
    })
    // yield call(fetchPosts, reddit)
  }
}
// 
// export function* nextRedditChange() {
//   while (true) {
//     const prevReddit = yield select(selectedRedditSelector)
//     yield take(actions.SELECT_REDDIT)

//     const newReddit = yield select(selectedRedditSelector)
//     const postsByReddit = yield select(postsByRedditSelector)
//     if (prevReddit !== newReddit && !postsByReddit[newReddit]) yield fork(fetchPosts, newReddit)
//   }
// }

// export function* startup() {
//   const selectedReddit = yield select(selectedRedditSelector)
//   yield fork(fetchPosts, selectedReddit)
// }

export default function* root() {
  yield fork(getTree)
//   yield fork(nextRedditChange)
//   yield fork(invalidateReddit)
}