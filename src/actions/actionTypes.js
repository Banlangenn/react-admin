export const LOGIN = 'LOGIN';
export const SIGN_OUT = 'SIGN_OUT';

// 1.帮助维护命名一致性，因为所有的 action type 汇总在同一位置。
// 2.有时，在开发一个新功能之前你想看到所有现存的 actions 。而你的团队里可能已经有人添加了你所需要的action，而你并不知道。
// 3.Action types 列表在 Pull Request 中能查到所有添加，删除，修改的记录。这能帮助团队中的所有人及时追踪新功能的范围与实现。
// 4.如果你在 import 一个 Action 常量的时候拼写错了，你会得到 undefined 。在 dispatch 这个 action 的时候，Redux 会立即抛出这个错误，你也会马上发现错误。
////////////
////////
///
/////
////
//
////
////
//////
///////////////
////
///
//
// 但是我不想要